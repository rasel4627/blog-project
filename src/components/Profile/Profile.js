import React, { Fragment, useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {useHistory} from 'react-router-dom'

export default function Profile() {
    let profile = JSON.parse(localStorage.getItem('user'))
    let id = profile[0]['id'];
    let name = profile[0]['name'];
    let email = profile[0]['email'];
    let website = profile[0]['website'];
    const history = useHistory();

    const [ myPost, setPost ] = useState([]);
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/MyPost/'+id,{
            method: 'GET'
        })
			.then((res) => {
				setPost(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
            
	}, []);

    function deletePost(id) {
        fetch("http://127.0.0.1:8000/DeletePost/"+id);
        // history.push('/')
        history.go();
      }


    return (
        <Fragment>
            <Navigation />
            <div className="container-fluid mx-0 sm:mx-16 my-32">
                <div>
                    <div className="bg-gray-100 relative shadow-xl w-full lg:w-4/6 xl:w-4/6 mx-auto">
                        <div className="flex justify-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmV8iY2AoANKaZio717sqf4VzHhluWrAeYw&usqp=CAU" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white" />
                        </div>

                        <div className="mt-16">
                            <h1 className="font-bold text-center text-3xl text-gray-900">{name}</h1>
                            <p className="text-center text-sm text-blue-500 font-medium"><span className="text-gray-500">Email:</span> {email}</p>
                            <p className="text-center text-sm text-blue-500 font-medium"><span className="text-gray-500">Website:</span> {website}</p>

                                <div className="flex justify-evenly mt-7 mb-2">
                                    <p className="bg font-bold text-xl text-gray-700 w-full text-center py-3">All Blog <span className="ml-5 text-white px-1 py-2 text-lg rounded-lg font-semibold transition duration-700 ease-in-out focus:outline-none tracking-wider px-3 lg:px-3 bg-blue-500 hover:bg-blue-800 shadow-lg"><NavLink to="/addPost">Add Blog</NavLink></span></p>
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
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                        Status
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {myPost.map((myPost) =>
                                                <tr>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div class="flex items-center">
                                                            <div class="flex-shrink-0 w-24 h-16">
                                                                <img class="w-full h-full "
                                                                    src={'http://127.0.0.1:8000/' + myPost.image}
                                                                    alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-0 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <NavLink to={'/blogdetails/'+myPost.id} class="text-gray-900 whitespace-no-wrap hover:text-blue-700 ">
                                                        {myPost.title}
                                                        </NavLink>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <NavLink title="Edit" to={'/editPost/'+myPost.id} class="text-blue-400 mr-2 text-lg md:text-xl"><i class="fa fa-edit"></i></NavLink>

	                                                    <a title="Delete" onClick={() => deletePost(myPost.id)} class="text-lg md:text-xl text-red-500 btn-sm" id="delete"><i class="fa fa-trash"></i></a>
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
                <Footer />
			</Fragment>
            );
}

