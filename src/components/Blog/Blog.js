import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Blog() {
	const [ post, setPost ] = useState([]);
	const [ visible, setVisible ] = useState(10);
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/AllPost')
			.then((res) => {
				setPost(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

    const loadMore = () => {
		setVisible(preValue => preValue + 10);
	}

	return (
		<Fragment>
			<div className="mx-auto bg-gray-500 dark:bg-gray-700 sm:p-1 md:p-4 lg:p-12">
				<h1 className="items-center justify-center font-bold text-center text-2xl sm:text-4xl p-6 text-white sm:p-8 md:pb-10 lg:pb-14 lg:pb-14">
					All Blog Post
				</h1>
				<div className="flex items-center justify-center mb-0 sm:mb-10 md:mb-6 lg:mb-10">
					<div className="grid sm:gap-2 md:gap-4 lg:gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

					{post.slice(0,visible).map((post) =>
						<div className="blogs bg-white sm:rounded-md shadow-xl mb-6 sm:mb-0 md:mb-0 lg:mb-3">
							<img src={'http://127.0.0.1:8000/' + post.image} className="sm:rounded-t-md h-56 sm:h-56 md:h-56 w-full object-cover" />
							<div className="p-5">
								<h1 className="text-2xl font-bold text-green-800 py-2">{post.title.substring(0, 22)}...</h1>
								<p className="bg-white text-sm text-black">{post.description.substring(0, 220)}. . . . </p>
								<NavLink
									to={'/blogdetails/'+post.id}
									className="py-2 px-3 mt-4 px-6 text-white bg-green-500 hover:bg-green-800 inline-block rounded">
									Read More
								</NavLink>
							</div>
						</div>
					)}

					</div>
				</div>
				<div className="flex justify-center mt-5 md:mt-16 ">
					<button onClick={loadMore} className="py-2 px-3 mb-8 px-6 text-xl font-semibold text-white bg-blue-500 hover:bg-blue-800 inline-block rounded">Load More</button>
				</div>
			</div>
		</Fragment>
	);
}
export default Blog;
