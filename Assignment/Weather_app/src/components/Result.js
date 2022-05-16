import { Button } from '@mui/material';
import React from 'react';
import './Result.css';

const Result = ({city,temp,desc,icon,setTemp}) => {
 

  return (
    <div className='result'>
      
        <div className='result__box'>
            <nav className='nav'>Live weather</nav>
            <h3>Weather is Currently {desc}</h3>
            <p>The temperature in {city} is {temp}&deg; C</p>
            <img src={icon} alt='icon' /><br/>
            <Button variant='contained' color='primary' onClick={()=>{setTemp("")}} >Back</Button>
            <footer className='nav'>Designed By Samsutheen@2022</footer>
        </div>
    </div>
  )
};

export default Result;