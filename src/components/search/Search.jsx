import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import "./search.css";
import { Link } from 'react-router-dom';
const Search = () => {
    const [key,setKey]=useState("");
    const [term,setTerm]=useState("");
    const dataReducers=useSelector(state=>state.movies.data);
    console.log("moviesDataReducersSearch",dataReducers);
    const onSubmitTerm=(e)=>{
        e.preventDefault();
        setKey(term)
        setTerm("")
        
    }
    const onSearchTerm=(e)=>{
        setTerm(e.target.value);

    }
    const searchDataReducers=dataReducers.filter((fil)=>{
        if(fil.title.toLowerCase().includes(key.toLowerCase())){
            return fil
        }
    })
    console.log("searchDataReducers",searchDataReducers)
    return (
        <div className="search-container">
            <form className="onChangeTerm" onSubmit={onSubmitTerm}>
                <input value={term} onChange={onSearchTerm}/>
                <button type="submit">Search</button>
            </form>
            <div className="searchTerm">
                {key.length===0?"":searchDataReducers.map((item,index)=>{
                    let indexitem=item.title.indexOf("-");
                    if(indexitem >0){
                        indexitem=item.title.substring(0,indexitem)
                    }
                    return <Link to={`/film/${item.title}`} key={index} className="trending-items">
                    <div className="search-img"><img src={item.imageUrl} /></div>
                    <div className="search-name">{indexitem}</div>
                    
                    <div className="search-box-title">
                        <div>{item.category}</div>
                        <div>17-10-2021</div>
                    </div>

                </Link>
                })}

            </div>
        </div>
    )
}

export default Search
