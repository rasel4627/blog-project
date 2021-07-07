import React, { Fragment, useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import axios from 'axios';

function SingleBlog(props) {
	const [comment , setComment] = useState("")
	let id = props.match.params.id;
	const [ singlepost, setPost ] = useState([]);
	useEffect(async ()=> {
		let res = await fetch("http://127.0.0.1:8000/PostDetails/"+id,{
			method: 'GET'
		})
			res = await res.json();
			setPost(res)
	}, []);

	async function saveComment(){
        let user = JSON.parse(localStorage.getItem('user'))
        let userID = user[0]['id'];
        let userName = user[0]['name'];
        const formData = new FormData();
        formData.append('post_id',id);
        formData.append('commentator',userName);
        formData.append('user_id',userID);
        formData.append('comment',comment);

        let data = await fetch("http://127.0.0.1:8000/StoreComment",{
            method: 'POST',
            body: formData, 
        });
    }

	const [allComment , setAllComment] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/GetComment/'+id)
            .then(res => {
                console.log(res)
                setAllComment(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

		return (
			<Fragment>
				<Navigation/>
			 {singlepost.map((singlepost) =>
				<div class="max-w-screen-xl mx-auto">
					<main class="mt-10 mb-12">
						<div class="mb-4 md:mb-0 w-full mx-auto relative">
							<div class="px-4 lg:px-0">
								<h2 class="text-lg sm:text-2xl md:text-4xl font-semibold text-gray-800 leading-tight mb-4">
								{singlepost.title}
								</h2>
							</div>
							<img src={'http://127.0.0.1:8000/' + singlepost.image} class="w-full imgHeight object-cover lg:rounded"/>
						</div>
				
						<div class="flex flex-col lg:flex-row lg:space-x-12">
					
							<div class="px-4 lg:px-0 mt-12 text-gray-700 text-md sm:text-lg leading-relaxed w-full ">
								<p class="pb-6">
								{singlepost.description}
								</p>
							</div>
						</div>

						
					{
                    localStorage.getItem('user')?
					<>
						<div class="flex items-center justify-center shadow-lg mt-12 mx-8 mb-12 max-w-lg">
							<form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
								<div class="flex flex-wrap -mx-3 mb-6">
									<h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
									<div class="w-full md:w-full px-3 mb-2 mt-2">
										<textarea value={comment} onChange={(e)=>setComment(e.target.value)} class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
									</div>
									<div class="w-full md:w-full flex items-start md:w-full px-3">
										<div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
										</div>
										<div class="-mr-1">
											<input onClick={saveComment} type='button' class="bg-gray-100 text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-300" value='Post Comment'/>
										</div>
									</div>
								</div>
							</form>
						</div>

						
						<div class="antialiased  max-w-screen-sm p-5">
							<h3 class="mb-4 text-lg font-semibold text-gray-900 ml-5">Comments</h3>
						{allComment.map((allComment) =>
							<div class="space-y-4 mb-3 bg-gray-100 p-3 rounded-lg">
								<div class="flex ">
								<div class="flex-shrink-0 mr-3 ">
									<img class="mt-2 rounded-full w-8 h-8 sm:w-12 sm:h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmV8iY2AoANKaZio717sqf4VzHhluWrAeYw&usqp=CAU" alt=""/>
								</div>
								<div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
									<strong>{allComment.commentator}</strong> <span class="text-xs text-gray-900">{allComment.created_at}</span>
									<p class="text-sm">{allComment.comment}</p>
								</div>
								</div>
							</div>
						)}  
						</div>
					</>
					:
					<></>
					}
						
					</main>
				</div>
			)}
				<Footer/>
			</Fragment>
		);
}
export default SingleBlog;
