import React, {Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import {useHistory} from 'react-router-dom'

function LoginForm() {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const history = useHistory()
     
    useEffect(() => {
        if(localStorage.getItem("user")){
            history.push('/')
        }
    },[])

    async function login(){
        let item = {email,password}
        console.warn(item)

        let result = await fetch("http://127.0.0.1:8000/UserLogin",{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                "Accept":'application/json'
            },
            body: JSON.stringify(item)
        });
        
            result = await result.json()
            localStorage.setItem("user",JSON.stringify(result))
            history.push('/')    
    }

    return(
        <Fragment>
                <Navigation/>
                <div className="w-full border-t-2 border-gray-100 max-w-sm mx-auto overflow-hidden bg-gray-200 rounded-lg shadow-md dark:bg-gray-800 mt-12 mb-12 sm:mt-24 sm:mb-24">
                    <div className="px-8 py-8">
                        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Login</h2>
                        <p className="mt-1 mb-6 text-center text-gray-500 dark:text-gray-400">Login or <span className="text-blue-400 font-bold">create an account</span></p>
                        <form className="">
                            <div className="w-full mt-4">
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 mb-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" name="email" placeholder="Email Address" aria-label="Email Address"/>
                            </div>

                            <div className="w-full mt-4">
                                <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" className="block w-full px-4 py-2 mt-2 mb-5 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" name="password" placeholder="Password" aria-label="Password"/>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                                <button onClick={login} className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded hover:bg-blue-900 focus:outline-none" type="button">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center justify-center py-4 text-center bg-gray-300 dark:bg-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
                        
                        <NavLink to="/registration" className="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">Register</NavLink>
                    </div>
                </div>
                <Footer/>
            </Fragment>
    )
}
export default LoginForm;