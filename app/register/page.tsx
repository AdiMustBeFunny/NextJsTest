'use client';

import { AllowOnlyNotAuthenticated } from "@/lib/components/route-guard";
import { FormEventHandler, useState } from "react";

function RegisterView() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
      });


    const submitForm: FormEventHandler<HTMLFormElement> = async (e) =>{
        e.preventDefault()
        const body = {
            username: formData.username,
            email: formData.email,
            password: formData.password
        }

        const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        console.log(body)

    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
    
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue
        }));
      };


    return (
        <div>
            <form action="#" onSubmit={submitForm}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={handleInput} value={formData.email} />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" onChange={handleInput} value={formData.username} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleInput} value={formData.password} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default function Register(){
    const GuardedRoute = AllowOnlyNotAuthenticated(RegisterView);

    return (
        <GuardedRoute></GuardedRoute>
    )
}