import React, { Component, Fragment } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    let user = JSON.parse(localStorage.getItem('user'))
    const history = useHistory();
    function LogOut(){
        localStorage.clear();
        history.push('/')
    }
    
    return (
            <Fragment>
                <nav className="bg-gray-900 shadow dark:bg-gray-800">
                    <div className="container-fluid px-6 py-6 mx-auto">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center ml-0 sm:ml-0 md:ml-5 lg:ml-7 m-1 sm:m-1 md:m-0 lg:m-0">
                                    <NavLink className="text-2xl font-bold text-gray-100 dark:text-white sm:text-3xl md:text-3xl lg:text-3xl hover:text-gray-200 dark:hover:text-gray-300" to="/">SmartWeb</NavLink>
                                </div>

                                <div className="flex md:hidden">
                                    <button id="nav-toggle" className="text-gray-200 dark:text-gray-200 hover:text-gray-300 dark:hover:text-gray-400 focus:outline-none focus:text-gray-300 dark:focus:text-gray-400"  type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            <div className={"items-center md:flex sm:mr-8" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
                                <div className="flex flex-col mt-5 md:flex-row md:mt-0 md:mx-1">
                                    <NavLink exact activeStyle={{color:"#00a8ee"}} className="my-1 text-lg leading-5 text-gray-100 dark:text-gray-200 hover:text-green-500 dark:hover:text-indigo-400  md:mx-4 md:my-0 hover:no-underline" to="/">Home</NavLink>
                                    <NavLink exact activeStyle={{color:"#00a8ee"}} className="my-1 text-lg leading-5 text-gray-100 dark:text-gray-200 hover:text-green-500 dark:hover:text-indigo-400  md:mx-4 md:my-0 hover:no-underline" to="/user">All User</NavLink>
                        
                                    <div className="mt-8 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-7">
                                        {
                                            localStorage.getItem('user')?
                                            <>
                                                <NavLink exact activeStyle={{color:"#00a8ee"}} className="text-md font-semibold leading-5 text-gray-100 dark:text-gray-200 dark:hover:text-indigo-400 md:mx-0 md:my-0 hover:bg-green-700 hover:no-underline focus:outline-none border-2 border-green-500 rounded-lg shadow-lg px-3 py-1 mt-4 mb-8 md:mt-0 mr-5 md:mr-2" to="/profile">Profile</NavLink>

                                                <NavLink onClick={LogOut} activeStyle={{color:"#00a8ee"}} className="text-md font-semibold leading-5 text-gray-100 dark:text-gray-200 dark:hover:text-indigo-400 md:mx-0 md:my-0 hover:bg-green-700 hover:no-underline focus:outline-none border-2 border-green-500 rounded-lg shadow-lg px-3 py-1 mt-4 mb-8 md:mt-0 mr-5 md:mr-2" to="/">Logout</NavLink>
                                              
                                            </>
                                            :
                                            <>
                                                <NavLink exact activeStyle={{color:"#00a8ee"}} className="text-md font-semibold leading-5 text-gray-100 dark:text-gray-200 dark:hover:text-indigo-400 md:mx-0 md:my-0 hover:bg-green-700 hover:no-underline focus:outline-none border-2 border-green-500 rounded-lg shadow-lg px-3 py-1 mt-4 mb-8 md:mt-0 mr-5 md:mr-2" to="/login">Login</NavLink>
                                                
                                                <NavLink exact activeStyle={{color:"#00a8ee"}} className="text-md font-semibold leading-5 text-gray-100 dark:text-gray-200 dark:hover:text-indigo-400 md:mx-0 md:my-0 hover:bg-green-700 hover:no-underline focus:outline-none border-2 border-green-500 rounded-lg shadow-lg px-3 py-1 mt-4 mb-8 md:mt-0" to="/registration">Sign Up</NavLink>
                                            </>
                                        }
                                        
                                        
                                    </div>
                                    
                                </div>
                                

                    
                            </div>
                        </div>
                    </div>
                </nav>
            </Fragment>
        );
    }




