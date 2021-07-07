import React, { Fragment, useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

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


        return (
            <Fragment>
                <Navigation/>
              {singleUser.map((singleUser) =>
                <div class="flex items-center justify-center mt-12 mb-8">
                    <div class="max-w-xs">
                        <div class="bg-white shadow-xl rounded-lg py-3 px-12">
                            <div class="photo-wrapper p-2">
                                <img class="w-32 h-32 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmV8iY2AoANKaZio717sqf4VzHhluWrAeYw&usqp=CAU" alt="John Doe"/>
                            </div>
                            <div class="p-2">
                                <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{singleUser.name}</h3>
                                <table class="text-xs my-3">
                                    <tbody>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td class="px-2 py-2">{singleUser.email}</td>
                                    </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Website</td>
                                        <td class="px-2 py-2">{singleUser.website}</td>
                                    </tr>
                                    
                                </tbody></table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
                <Footer/>
            </Fragment>
        );
}
