import React from 'react'
import Header from '../components/header/Header'
import SimpleBottomNavigation from "../components/navigation/SimpleBottomNavigation";
import {Route,Switch} from "react-router-dom";
import Trending from '../components/trending/Trending';
import Movies from '../components/movies/Movies';
import Series from '../components/series/Series';
import Search from '../components/search/Search';
import "./homepage.css";
import { useState,useEffect,useRef } from 'react';
import Products from '../components/product/Products';
import {FaArrowCircleUp} from "react-icons/fa";
import { Link } from 'react-scroll';
const Homepage = () => {
    const prevPos=useRef(0);
    const [scrollDown,setScrollDown]=useState(false);
    useEffect(()=>{
        const handleScroll=(event)=>{
          const isScrollUp=document.documentElement.scrollTop<=prevPos.current;
          setScrollDown(isScrollUp);
          prevPos.current=document.documentElement.scrollTop;
          if(document.documentElement.scrollTop===0){
            setScrollDown(false)
          }
          if(document.documentElement.scrollTop>=1200){
            setScrollDown(true)
          }
        }
        
        document.addEventListener("scroll",handleScroll);
        return ()=>{
          document.removeEventListener("scroll",handleScroll)
        };
      },[])
    return (
        <div className="homepage-container" >
            <div id="navbarid">
                <Header />

            </div>
            
            
            
            
            
            <Switch>
                <Route path="/" exact component={Trending}/>
                <Route path="/film/:products"  component={Products}/>
                <Route path="/movies" component={Movies}/>
                <Route path="/series" component={Series}/>
                <Route path="/search" component={Search}/>
            </Switch>
            <div className="homepage-all"><SimpleBottomNavigation/></div>
            {/* <div className="scroll" onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth' })}}><FaArrowCircleUp/></div> */}
            <Link className="dropdown" to="navbarid" smooth={true} duration={600}>{scrollDown?<div className="scroll"><FaArrowCircleUp/></div>:""}</Link>
        </div>
    )
}

export default Homepage
