import React from 'react'
import {useParams } from "react-router";
import {useEffect} from "react";
import "./products.css";

import { useSelector,useDispatch } from 'react-redux';
import { productItem,randomItem } from '../../redux/actions/Movieactions';
import Carouselslide from '../carousel/Carouselslide';

const Products = () => {
    let {products}=useParams();
    const dispatch=useDispatch();
    const dataReducers=useSelector(state=>state.movies.data);

    const productsFilter=dataReducers.filter((fil)=>{
                return fil.title===products
            })
    const randomSuggest=dataReducers.filter((fil)=>{
        return fil.title!==products
    })

    let randomArr=[];
    for (let i=1;i<=6;i++){
        const random=Math.floor(Math.random()*dataReducers.length);
        randomArr.push(dataReducers[random]);
      }
      const action=randomItem(randomArr);
      dispatch(action);

    return (
        <div className="product-container">
            
           {productsFilter.length===0?(<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>NOT FOUND</div>):productsFilter.map((item)=>{
           
               return <div className="product-map--item">
                    
                  <div className="product-film">
                      <iframe src={item.episode[0].url} ></iframe>
                  </div>
                  <div className="product-title"><div className="product-title--details"><h2 className="product-title--details---cate">{item.category}</h2> <h2 className="product-title--details---name">{item.title}</h2> </div> </div>
               </div>
                   
              
           })}
           <Carouselslide randomArr={randomArr}/>
        </div>
    )
}

export default Products
