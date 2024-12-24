'use client';

import { useEffect, useState } from "react";
import { userAuthenticated } from "./route-guard";

function NavigationComponent(){
    return (
        <nav>
            <a href="#">Link1</a>
            <a href="#">Link2</a>
            <a href="#">Link3</a>
        </nav>
    )
}

export default function Navigation(){
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() =>{
        const newValue = userAuthenticated();
        setAuthenticated(newValue)
    })

    return authenticated ? <NavigationComponent/> : <></>
}