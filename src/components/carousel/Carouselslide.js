import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import "./carouselc.css"
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const  PreviousBtn = (props) => {
  const {className, onClick} = props;
  return (
      <div className={className} onClick={onClick}>
           <GrFormPrevious />
      </div>
  )
}
export const NextBtn = (props) => {
  const {className, onClick} = props;
  return (
      <div className={className} onClick={onClick}>
          <GrFormNext />
      </div>
  )
}
export default function Carouselslide() {
  const dataReducers=useSelector(state=>state.movies.data);
  const randomItemsReducers=useSelector(state=>state.movies.randomItems);
  // console.log("randomItemsReducers",randomItemsReducers)
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    spaceBetween:10
  };
  return (
    <div className="carousel-container">
          <h2 style={{display:"flex",justifyContent:"center",marginTop:"80px"}}>Recommend Movies</h2>
          <div className="carousel-box">

            <div className="carousel-item">
            <Slider {...settings} >
          
            {randomItemsReducers.map((item,index)=>{
              return <Link  to={item&&`/film/${item.title}`}  onClick={()=>window.scroll(0,0)}><img key={index}  className="carousel-img"  src={item&&item.imageUrl} /></Link>
            })}
        
        
    
      </Slider>
        </div>
          </div>
    
  </div>
  );
}