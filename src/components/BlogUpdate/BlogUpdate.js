import React, { useState, Fragment, useEffect } from 'react';
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import {useHistory} from 'react-router-dom'

export default function BlogUpdate(props){
    let id = props.match.params.id;
    const [ postData, setPost ] = useState([]);
    useEffect(async ()=> {
        let res = await fetch("http://127.0.0.1:8000/EditPost/"+id,{
            method: 'GET'
        })
          res = await res.json();
          setPost(res)
    },[]);
    

    const [title , setTitle] = useState("")
    const [image , setFile] = useState("")
    const [description , setDescription] = useState("")
    const history = useHistory();

    async function updatePost(){
        let id = props.match.params.id;
        let user = JSON.parse(localStorage.getItem('user'))
        let userID = user[0]['id'];
        const formData = new FormData();
        formData.append('user_id',userID);
        formData.append('image',image);
        formData.append('title',title);
        formData.append('description',description);

        let data = await fetch("http://127.0.0.1:8000/UpdatePost/"+id,{
            method: 'POST',
            body: formData, 
        });
        history.push('/profile')
    }

        return (
            <Fragment>
                <Navigation/>
                {postData.map((postData) =>
                <div class="flex bg-gray-200 items-center justify-center">
                    <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2 ">
                        <div class="flex justify-center py-4">
                        <div class="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        </div>
                        </div>

                        <div class="flex justify-center">
                        <div class="flex">
                            <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Update Blog</h1>
                        </div>
                        </div>
                        
                            <div class="grid grid-cols-1 mt-5 mx-7 mb-3">
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Title</label>
                            <input type="text" onChange={(e)=>setTitle(e.target.value)} defaultValue={postData.title} class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                            </div>
                       
                       
                            <div class="grid grid-cols-1 mt-5 mx-7 mb-5">
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-2">Upload Photo</label>
                            <input type='file' onChange={(e)=>setFile(e.target.files[0])}  class="" />   
                            <img  style={{width:200}} src={"http://127.0.0.1:8000/"+postData.image} />
                            </div>
                      
                            <div class="grid grid-cols-1 mt-5 mx-7">
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Description</label>
                            <textarea onChange={(e)=>setDescription(e.target.value)} defaultValue={postData.description}   class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="7"></textarea>
                            </div>
                      
                        <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                        <button class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
                        <button onClick={updatePost} class="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2" type="button">Update</button>
                        </div>

                    </div>
                    </div>
                )}
                    <Footer/>
            </Fragment>
        );
}