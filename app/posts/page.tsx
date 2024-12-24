'use client';

import { AllowOnlyAuthenticated } from "@/lib/components/route-guard";

export function PostListComponent(){
    return (
        <div>
            Post list component
        </div>
    )
}

export default function Posts(){
    const GuardedComponent = AllowOnlyAuthenticated(PostListComponent);

    return <GuardedComponent></GuardedComponent>
}