import React, { useState } from "react"
import {
        useLoaderData,
        useNavigate ,
        Form, 
        redirect ,
        useActionData,
        useNavigation
    } from "react-router-dom"
import { loginUser } from "../utils";

export function loader({request}){
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
    console.log(pathname);
    
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin",JSON.stringify(true))
        return redirect(pathname)
    }catch(err) {
        return err
    }   
}
export default function Login() {
    const message = useLoaderData()
    const error = useActionData()
    const navigation = useNavigation()

   
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h2 className="red">{ message}</h2>}
            {error && <h2 className="red">{ error.message}</h2>}
            <Form 
                method = "post"
                className="login-form"
                replace >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button 
                disabled = {navigation.state === "submitting"} 
                > {navigation.state === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    )

}