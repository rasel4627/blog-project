import React, { Fragment, useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function UserProfile(props) {
    let id = props.match.params.id;
	const [ singleUser, setUser ] = useState([]);
	useEffect(async () => {
		let res = await fetch("http://127.0.0.1:8000/SingleUser/"+id,{
			method: 'GET'
		})
			res = await res.json();
			setUser(res)
	}, []);

    const [ userPost, setUserPost ] = useState([]);
	useEffect(async () => {
		let result = await fetch('http://127.0.0.1:8000/SingleUserPost/'+id,{
            method: 'GET'
        })
            result = await result.json();
			setUserPost(result)
	}, []);

    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 4
    const pagesVisited = pageNumber * userPerPage
    const pageCount = Math.ceil(userPost.length / userPerPage)
    const changePage = ({ selected }) => {
            setPageNumber(selected)
    };

        return (
            <Fragment>
                <Navigation/>
              
              <div className="container-fluid mx-0 sm:mx-16 my-32">
              <div>
                  <div className="bg-gray-100 relative shadow-xl w-full lg:w-4/6 xl:w-4/6 mx-auto">
                      <div className="flex justify-center">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmV8iY2AoANKaZio717sqf4VzHhluWrAeYw&usqp=CAU" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white" />
                      </div>

                      <div className="mt-16">
                      {singleUser.map((singleUser) =>
                        <>
                          <h1 className="font-bold text-center text-3xl text-gray-900">{singleUser.name}</h1>
                          <p className="text-center text-sm text-blue-500 font-medium"><span className="text-gray-500">Email:</span> {singleUser.email}</p>
                          <p className="text-center text-sm text-blue-500 font-medium"><span className="text-gray-500">Website:</span> {singleUser.website}</p>

                              <div className="flex justify-evenly mt-7 mb-2">
                                  <p className="bg font-bold text-xl text-gray-700 w-full text-center py-3">Blog of {singleUser.name} </p>
                              </div>
                        </>
                       )}

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
                                        {
                                          userPost.slice(pagesVisited, pagesVisited + userPerPage)
                                          .map((userPost) => 
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
                                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                      <NavLink title="Edit" to={'/editPost/'+userPost.id} class="text-blue-400 mr-2 text-lg md:text-xl"><i class="fa fa-edit"></i></NavLink>

                                                      <a title="Delete" class="text-lg md:text-xl text-red-500 btn-sm" id="delete"><i class="fa fa-trash"></i></a>
                                                  </td>
                                              </tr>
                                        )} 
                                          </tbody>
                                      </table>
                                  </div>
                                  <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                  />
                              </div>
                                  <div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              
          
                <Footer/>
            </Fragment>
        );
}
