import React from 'react';
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
import './Input.css';


const Inputer = ({input,setInput,findWeather}) => {
  const handleChange = (event)=>{
    setInput(event.target.value);
  }

  const handleClick = (event)=>{
    event.preventDefault();
    findWeather();
  }

  return (
    <div className='inputBox'>
        <div className='inputBox__field'>
            <nav className='nav'>Live weather</nav>
            <h2>World Weather Report</h2>
            <p>uses openweathermap API and provides live weather report on the city provide</p>

            <form>
              
              <Input placeholder="Enter The city name" onChange={handleChange} value = {input} />
              <br />
              <Button variant='contained' color='primary' type="submit" onClick={handleClick}>Search</Button>
            </form>

            <footer className='nav'>Designed By Samsutheen@2022</footer>
        </div>
       

    </div>
  )
};

export default Inputer;