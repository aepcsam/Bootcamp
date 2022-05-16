import React,{useState} from 'react';
import Input from './components/Input';
import axios from 'axios';
import Result from './components/Result';


const App = () => {

  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [city,setCity] = useState("");
  

  const findWeather = async()=>{
    const apikey = "49a17384a45149e2ec15bfc4e5c1b19f";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+
    input + "&appid=" + apikey + "&units="+unit;
    const response = await axios.get(url);
    const temp = await response.data.main.temp;
    const weatherDescription = response.data.weather[0].description;
    const icon =  response.data.weather[0].icon;
    const iconimg = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
    const city = response.data.name;


    console.log(weatherDescription)

    

    
    setTemp(temp);
    setDescription(weatherDescription);
    setIcon(iconimg);
    setCity(city);
    console.log(city);

   
    console.log(response);

    setInput("");
    
  }

  

  return (
    <div className='app'>
      {temp === "" ? (
        <Input input = {input} setInput={setInput} findWeather={findWeather}/>
      ):(
      <Result city={city} setInput={setInput} temp = {temp} desc={description} icon={icon} setTemp ={setTemp} />
      )};
      
      



    </div>
  )
}

export default App;