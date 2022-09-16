import React , {useState,useEffect} from 'react'
import "./header.css"
import Weather from "../../assets/weather.png"
import axios from "axios"
import Chart from "../Chart/Chart";
import Tabs from '../Tabs/Tabs';
import Bottom from '../Bottom/Bottom';

function Header() {
  const [data , setData] = useState({})
  const apikey = "b8093cda613e6d6f9136886ba863e80c"
  const [cityName , setInputCity] = useState("")



  const  hanldeFetchData =(cityName) => {
    if (!cityName) return;
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apikey;
    axios
      .get(apiUrl)
      .then((res) => {
        // console.log("response", res?.data);

        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

console.log(data)

const handleChangeInput = (e) => {
  
   console.log(e.target.value ,"inputt")
    setInputCity(e.target.value)
}

 const handleSearch = () => {
  hanldeFetchData(cityName)
 }
useEffect(() => {
  hanldeFetchData("Noida")
} , [])




  return (
    <>
    <div className = "header_container">

 { data?.weather?.map((eachData) => {
    console.log(eachData.description)
  }) }
      <div className = "header_wrapper">
        <div className = "img_container">
          <img src = {Weather}  alt = "weather_img" className = "weather_image"/>
        </div>
        <div className = "temp_container">
         <p className = "degree_temp">{data?.name}</p>
         <span className = "celcius_farenhite">
         {/* <span className = "degree_temp">{((data?.main?.temp )- 273) .toFixed(2)}</span> */}
         <span className = "degree_temp">{((data?.main?.temp) - 273.15).toFixed(2)}</span>
        
         <span className = "degree">&#8451;</span> |
         <span className='farenhite'>&#8457;</span> 
         </span>
        </div>
        <div className = "percentage_details_container">
          <p className = "rate_percentage pre">Pressure:{data?.main?.pressure}</p>
          <p className = "rate_percentage humi">Humidity: 16%</p>
          <p className = "rate_percentage wind">Wind: {data?.wind?.speed} Km/h</p>
        </div>


       {/* <p> {data}</p> */}
      </div>
      <div className = "search_input_container">
        <div className = "search_input_wrapper_container">
          <input type = "text" className = "search_input" placeholder = "Search" onChange = {handleChangeInput} name = "city" value = {cityName} />
          
          <button className = "search_button" type = "submit" onClick = {handleSearch}>Button</button>
        </div>
      </div>
      
    </div>
    <Chart  data = {data}/>
    <Tabs  data = {data}/>
    <Bottom data = {data} />
    </>
  )
}

export default Header
