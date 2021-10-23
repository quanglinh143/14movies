import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import Trending from '@mui/icons-material/TrendingUp';
import SearchOnIcon from "@mui/icons-material/Search";
import TVOnIcon from "@mui/icons-material/Tv";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./simple.css";
export default function SimpleBottomNavigation() {
  const pageReducers=useSelector(state=>state.movies.page);
  console.log("pageReducers",pageReducers)
  
 
  
  return (
    
    <div className="simple-container">
      <div className="simple-container-box">
        <Link to="/" className="simple-trending simple-items">
          <Trending/>
          <span>Trending</span>
        </Link>
        <Link to="/movies" className="simple-movies simple-items">
          <RestoreIcon/>
          <span>Movies</span>
        </Link>
        <Link to="/series" className="simple-series simple-items">
          <TVOnIcon/>
          <span>Tv series</span>
        </Link>
        <Link to="/search" className="simple-search simple-items" >
          <SearchOnIcon/>
          <span>Search</span>
        </Link>

      </div>
    </div>
    
  );
}

