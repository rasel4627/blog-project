import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Blog() {
	const [ post, setPost ] = useState([]);
	const [ allPost, setAllPost ] = useState(post.slice(0,30));
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/AllPost')
			.then((res) => {
				setPost(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Fragment>
			<div className="mx-auto bg-gray-500 dark:bg-gray-700 sm:p-1 md:p-4 lg:p-12">
				<h1 className="items-center justify-center font-bold text-center text-2xl sm:text-4xl p-6 text-white sm:p-8 md:pb-10 lg:pb-14 lg:pb-14">
					All Blog Post
				</h1>
				<div className="flex items-center justify-center mb-0 sm:mb-10 md:mb-6 lg:mb-10">
					<div className="grid sm:gap-2 md:gap-4 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
					{post.map((post) =>
						<div className="blogs bg-white sm:rounded-md shadow-xl mb-6 sm:mb-0 md:mb-0 lg:mb-0">
							<img src={'http://127.0.0.1:8000/' + post.image} className="sm:rounded-t-md h-72 w-full object-cover" />
							<div className="p-5">
								<h1 className="text-2xl font-bold text-green-800 py-2">{post.title.substring(0, 28)}...</h1>
								<p className="bg-white text-sm text-black">{post.description.substring(0, 350)}</p>
								<NavLink
									to={'/blogdetails/'+post.id}
									className="py-2 px-3 mt-4 px-6 text-white bg-green-500 hover:bg-green-800 inline-block rounded"
								>
									Read More
								</NavLink>
							</div>
						</div>
					)}
					</div>
				</div>

				<div className="px-24 sm:px-0 md:px-0 lg:px-0 py-4 sm:py-0 md:py-0 lg:py-0 sm:mb-24 md:mb-24 lg:mb-28 sm:mt-8">
					<div className="sm:float-right sm:ml-0 md:ml-0 lg:ml-0">
						<div className="flex mb-6">
							<a
								href="#"
								className="flex items-center px-2 py-1 sm:px-4 sm:py-2 mr-1 mx-0 sm:mx-1 text-gray-700 bg-gray-300 sm:bg-white text-xs sm:text-lg md:text-md lg:text-lg rounded sm:rounded-md dark:bg-gray-800 dark:text-gray-600"
							>
								previous
							</a>
							<a
								href="#"
								className="flex items-center px-2 py-1 sm:px-4 sm:py-2 mr-1 mx-0 sm:mx-1 text-gray-700 transition-colors duration-200 transform bg-gray-300 sm:bg-white text-xs sm:text-lg md:text-md lg:text-lg rounded sm:rounded-m dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
							>
								1
							</a>
							<a
								href="#"
								className="flex items-center px-2 py-1 sm:px-4 sm:py-2 mr-1 mx-0 sm:mx-1 text-gray-700 transition-colors duration-200 transform bg-gray-300 sm:bg-white text-xs sm:text-lg md:text-md lg:text-lg rounded sm:rounded-m dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
							>
								2
							</a>
							<a
								href="#"
								className="flex items-center px-2 py-1 sm:px-4 sm:py-2 mr-1 mx-0 sm:mx-1 text-gray-700 transition-colors duration-200 transform bg-gray-300 sm:bg-white text-xs sm:text-lg md:text-md lg:text-lg rounded sm:rounded-m dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
							>
								3
							</a>
							<a
								href="#"
								className="flex items-center px-2 py-1 sm:px-4 sm:py-2 mr-1 mx-0 sm:mx-1 text-gray-700 transition-colors duration-200 transform bg-gray-300 sm:bg-white text-xs sm:text-lg md:text-md lg:text-lg rounded sm:rounded-m dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
							>
								Next
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
export default Blog;
