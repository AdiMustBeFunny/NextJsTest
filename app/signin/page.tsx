'use client';

import { AllowOnlyNotAuthenticated } from "@/lib/components/route-guard";
import { useEffect } from "react";

export function SignInComponent(){

    useEffect(() =>{
        console.log('Sign in effect')
    })

    return (
        <div>
            <h1>Log in</h1>
        </div>
    )
}

export default function SignIn(){
    const GuardedComponent = AllowOnlyNotAuthenticated(SignInComponent)

    return <GuardedComponent></GuardedComponent>
}