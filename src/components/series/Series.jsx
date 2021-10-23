import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { page } from '../../redux/actions/Movieactions';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import "./series.css"
const Series = () => {
    const dispatch=useDispatch()
    const dataReducers=useSelector(state=>state.movies.data);
    const tvDataReducers=dataReducers.filter((fil)=>{
        return fil.category=== "Phim hoạt hình" ||fil.category=== "Phim phiêu lưu"||fil.category=== "Phim tình cảm" 
    })
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage,setPostsPerPage]=useState(18);
    const pageCount=Math.ceil(dataReducers.length/postsPerPage);
    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage;

    const currentPagination=tvDataReducers.slice(indexOfFirstPost,indexOfLastPost);
    const changePage=({selected})=>{
        setCurrentPage(selected+1)
        const action=page(selected+1);
        dispatch(action)
        window.scroll(0,0)

      }
    return (
        <div className="tv-container-box">

            <div className="tv-container">
                {tvDataReducers.length===0?"":currentPagination.map((item,index)=>{
                let indexitem=item.title.indexOf("-");
                if(indexitem >0){
                    indexitem=item.title.substring(0,indexitem)
                }

                
                return   <Link to={`/film/${item.title}`} key={index} className="tv-items">
                                <div className="tv-img"><img src={item.imageUrl} /></div>
                                <div className="tv-name">{indexitem}</div>
                                
                                <div className="tv-box-title">
                                    <div>{item.category}</div>
                                    <div>17-10-2021</div>
                                </div>

                            </Link>
            })}
           

            </div>
            <div className="tv-pagination" >
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

export default Series
