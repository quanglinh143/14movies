import React from 'react';
import axios from "axios";
import Singlecontent from '../single/Singlecontent';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setData } from '../../redux/actions/Movieactions';
import "./trending.css";
import { Link } from 'react-router-dom';

const Trending = () => {
    const dispatch=useDispatch()
    const dataReducers=useSelector(state=>state.movies.data);
    const [loadData,setLoadData]=useState(18);
    const dataReducersLoadMore=dataReducers.slice(0,loadData);

    const onAddLoadMore=()=>{
        setLoadData(loadData+12)
    }

    return (
        <div  className="trending-box">
            <div className="trending-container">
            {dataReducers && dataReducersLoadMore.map((item,index)=>{
               
                let indexitem=item.title.indexOf("-");
                if(indexitem >0){
                    indexitem=item.title.substring(0,indexitem)
                }  

                return   <Link to={`/film/${item.title}`} key={index} className="trending-items">
                                <div className="trending-img"><img src={item.imageUrl} /></div>
                                <div className="trending-name">{indexitem}</div>
                                
                                <div className="trending-box-title">
                                    <div>{item.category}</div>
                                    <div>17-10-2021</div>
                                </div>

                            </Link>
            })}
            
            </div>
            {dataReducers.length<=loadData?"": <button className="trending-btn" onClick={onAddLoadMore}>Loadmore</button>}
        </div>
    )
}

export default Trending
