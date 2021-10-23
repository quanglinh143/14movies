import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";
import { page } from '../../redux/actions/Movieactions';
import "./movies.css";
const Movies = () => {
    const dispatch=useDispatch()
    const dataReducers=useSelector(state=>state.movies.data);
    // console.log("moviesDataReducers",dataReducers);
    const moviesDataReducers=dataReducers.filter((fil)=>{
        return fil.category=== "Phim cổ trang" ||fil.category=== "Phim kinh dị"||fil.category=== "Phim hành động" 
    })
    // console.log("moviesDataReducers",moviesDataReducers);

    //phan trang
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage,setPostsPerPage]=useState(18);
    const pageCount=Math.ceil(moviesDataReducers.length/postsPerPage);
    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage;

    const currentPagination=dataReducers.slice(indexOfFirstPost,indexOfLastPost);
    const changePage=({selected})=>{
        setCurrentPage(selected+1)
        const action=page(selected+1);
        dispatch(action)
        window.scroll(0,0)

      }
    
    return (
        <div className="movies-container-box">

            <div className="movies-container">
                {moviesDataReducers.length===0?"":currentPagination.map((item,index)=>{
                let indexitem=item.title.indexOf("-");
                if(indexitem >0){
                    indexitem=item.title.substring(0,indexitem)
                }

                
                return   <Link to={`/film/${item.title}`}  key={index} className="movies-items">
                                <div className="movies-img"><img src={item.imageUrl} /></div>
                                <div className="movies-name">{indexitem}</div>
                                
                                <div className="movies-box-title">
                                    <div>{item.category}</div>
                                    <div>17-10-2021</div>
                                </div>

                            </Link>
            })}
           

            </div>
            <div className="movies-pagination" >
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"PaginationBttns"}
                    disableInitialCallback={true}
                    activeClassName={"paginationActive"}
                    pageRangeDisplayed="3"
                    marginPagesDisplayed="1"
                    
                    
                    
                />

            </div>
        </div>
    )
}

export default Movies
