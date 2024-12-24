'use client';
import { jwtDecode } from "jwt-decode";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function isTokenExpired(token: string) {
    if (!token) return true;
    try {
        const decodedToken = jwtDecode(token);

        if (!decodedToken || !decodedToken.exp) {
            return true
        }

        const currentTime = Date.now() / 1000;
        return decodedToken.exp < currentTime;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
};

export function userAuthenticated() : boolean{
    const token = localStorage.getItem('token')
    const tokenExpired = isTokenExpired(token ?? '')

    return false;
    return !tokenExpired;
}

export function AllowOnlyNotAuthenticated(WrappedComponent: any){
    return (props: any) => {
        
        const [canView, setCanView] = useState(false);
        const router = useRouter();

        useEffect(() => {
            const authenticated = userAuthenticated()

            if(authenticated){
                router.push('/')
                return;
            }

            setCanView(true);
        })

        return canView ? <WrappedComponent {...props} /> : null;
    }
}

export function AllowOnlyAuthenticated(WrappedComponent: any){
    return (props: any) => {
        
        const [canView, setCanView] = useState(false);
        const router = useRouter();

        useEffect(() => {
            const authenticated = userAuthenticated()
            console.log(authenticated)
            if(authenticated){
                setCanView(true);
            }
            else {
                router.push('/signin')
            }
        })

        return canView ? <WrappedComponent {...props} /> : null;
    }
}

export function RouteGuard(WrappedComponent: any) {
    
    return (props: any) => {
        const router = useRouter();
        const pathname = usePathname();
        const [authorized, setAuthorized] = useState(false);
        const publicRoutes = ['/signin', '/register']

        useEffect(() => {
            const authenticated = userAuthenticated()

            if (!authenticated && !publicRoutes.includes(pathname)) {
                localStorage.removeItem('token')
                router.push('/signin')
                return
            }

            if (authenticated && publicRoutes.includes(pathname)) {
                router.push('/')
                return
            }

            if(!authenticated && publicRoutes.includes(pathname)){
                setAuthorized(true)
            }
            else{
                setAuthorized(authenticated)
            }
        }, [ router, pathname])

        return authorized ? <WrappedComponent {...props} /> : null;
    }
};