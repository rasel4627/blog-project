import React, { Fragment,useState } from 'react';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import {useHistory} from 'react-router-dom'

function RegistrationForm() {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [website , setWebsite] = useState("")
  const history = useHistory();

  async function signUp(){
    let item = {name,email,password,website}
    if(item.name.length>0 && item.email.length>0 && item.password.length>0 && item.website.length>0){
      let result = await fetch("http://127.0.0.1:8000/UserReg",{
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        "Accept":'application/json'
       } 
    })
      result = await result.json()
      localStorage.setItem("user",JSON.stringify(result))
      history.push('/profile')  
    }else{
      alert("Please fill all the field")
      history.push('/registration') 
    }
  }

  return(
    <Fragment>
      <Navigation/>
      <div className="w-full border-t-2 border-gray-100 max-w-sm mx-auto overflow-hidden bg-gray-200 rounded-lg shadow-md dark:bg-gray-800 mt-12 mb-12 sm:mt-24 sm:mb-24">
          <div className="px-8 py-8">
              <h2 className="text-3xl mt-1 font-bold text-center text-gray-700 dark:text-white">Registration</h2>
              <p className="mt-1 mb-6 text-center text-gray-500 dark:text-gray-400">Enter your information to register</p>
              <form>
                  <div className="w-full mt-4">
                      <input value={name} onChange={(e)=>setName(e.target.value)} name="name" className="block w-full px-4 py-2 mt-2 mb-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" id="name"   placeholder="Full Name" aria-label="Email Address" required/>
                  </div>

                  <div className="w-full mt-4">
                      <input value={website} onChange={(e)=>setWebsite(e.target.value)} className="block w-full px-4 py-2 mt-2 mb-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" name="website"  id="website" placeholder="Your Website" aria-label="Email Address"/>
                  </div>

                  <div className="w-full mt-4">
                      <input value={email} onChange={(e)=>setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 mb-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" name="email"  id="email" placeholder="Email Address" aria-label="Email Address" required/>
                  </div>

                  <div className="w-full mt-4">
                      <input value={password} onChange={(e)=>setPassword(e.target.value)} className="block w-full px-4 py-2 mt-2 mb-5 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" name="password" id="password" placeholder="Password" aria-label="Password" required/>
                  </div>

                  <div className="flex items-center justify-between mt-8 ml-20">
                      <button onClick={signUp}  className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded hover:bg-blue-900 focus:outline-none" type="button">
                          Registration Now
                      </button>
                  </div>
              </form>
          </div>

          
      </div>
      <Footer/>
    </Fragment>
  )
}
export default RegistrationForm;
