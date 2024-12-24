'use client';
import { AllowOnlyAuthenticated } from '@/lib/components/route-guard';


function AboutComponent() {
    return (
        <div>
            About page
        </div>
    )
}

export default function About(){
    const GuardedComponent = AllowOnlyAuthenticated(AboutComponent);

    return <GuardedComponent></GuardedComponent>
}