import React, { Fragment, useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function UserProfile(props) {
    let id = props.match.params.id;
	const [ singleUser, setUser ] = useState([]);
	useEffect(async ()=> {
		let res = await fetch("http://127.0.0.1:8000/SingleUser/"+id,{
			method: 'GET'
		})
			res = await res.json();
			setUser(res)
	}, []);

    const [ userPost, setUserPost ] = useState([]);
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/SingleUserPost/'+id,{
            method: 'GET'
        })
			.then((res) => {
				setUserPost(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


        return (
            <Fragment>
                <Navigation/>
              {singleUser.map((singleUser) =>
              <div className="container-fluid mx-0 sm:mx-16 my-32">
              <div>
                  <div className="bg-gray-100 relative shadow-xl w-full lg:w-4/6 xl:w-4/6 mx-auto">
                      <div className="flex justify-center">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmV8iY2AoANKaZio717sqf4VzHhluWrAeYw&usqp=CAU" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white" />
                      </div>

                      <div className="mt-16">
                          <h1 className="font-bold text-center text-3xl text-gray-900">{singleUser.name}</h1>
                          <p className="text-center text-sm text-blue-500 font-medium"><span className="text-gray-500">Email:</span> {singleUser.email}</p>
                          <p className="text-center text-sm text-blue-500 font-medium"><span className="text-gray-500">Website:</span> {singleUser.website}</p>

                              <div className="flex justify-evenly mt-7 mb-2">
                                  <p className="bg font-bold text-xl text-gray-700 w-full text-center py-3">Blog of {singleUser.name} </p>
                              </div>

                              <div className="w-full bg-white">
                              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto">
                                  <div class="inline-block min-w-full shadow rounded-lg overflow-hidden mb-8">
                                      <table class="min-w-full leading-normal">
                                          <thead>
                                              <tr>
                                                  <th
                                                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                      Image
                                                  </th>
                                                  <th
                                                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                      Title
                                                  </th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                          {userPost.map((userPost) =>
                                              <tr>
                                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                      <div class="flex items-center">
                                                          <div class="flex-shrink-0 w-24 h-16">
                                                              <img class="w-full h-full "
                                                                  src={'http://127.0.0.1:8000/' + userPost.image}
                                                                  alt="" />
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td class="px-0 py-5 border-b border-gray-200 bg-white text-sm">
                                                      <NavLink to={'/blogdetails/'+userPost.id} class="text-gray-900 whitespace-no-wrap hover:text-blue-700 ">
                                                      {userPost.title}
                                                      </NavLink>
                                                  </td>
                                              </tr>
                                          )}  
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                                  <div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            )}
                <Footer/>
            </Fragment>
        );
}
