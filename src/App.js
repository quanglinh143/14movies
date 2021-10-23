
import './App.css';
import Homepage from './homepage/Homepage';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setData } from './redux/actions/Movieactions';
import axios from 'axios';
function App() {
  const dispatch=useDispatch();
  const fetchData=async()=>{
    const response=await axios.get(`https://quanphim.herokuapp.com/api/phimle`)
    .catch((err)=>console.log("ERR_API:",err))
    const action=setData(response.data);
    dispatch(action)
  }
  useEffect(()=>{
      fetchData()
  },[])
  return (
    <div className="App">
      <Homepage/>  
     
    </div>
  );
}

export default App;
