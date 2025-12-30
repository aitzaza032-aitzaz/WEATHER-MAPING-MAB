import React, { useState } from 'react'
import { useFormStatus } from 'react-dom'
import axios from 'axios'
import WeatherCard from "./weathercard.jsx"
function Home() {
   const[data,setdata]=useState([])
   const[cityname,setcityname]=useState("")

    const WEATHER=async(e)=>
    {
        e.preventDefault()
        console.log("i am submit handle function ");
        try{
            const res= await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=63089e68349f64e8b4b91cbe51a111fc&units=metric`)
            console.log("response",res)
            setdata(res.data.list)
        }
        catch(error)
        {
            alert("there is an error from your sider ")
        }


    }





  return (
    <div>      
        <h2> weather Maping   </h2>  
        <form onSubmit={WEATHER}>
    <input type='text' placeholder='enter your city name' onChange={(e)=>{setcityname(e.target.value)}} />
    <button type='submit'>Get Weather</button>
        </form>
         
        
         {data.map((item, index) => (
                        <WeatherCard 
                            key={index}
                            date={item.dt_txt}
                            temp={item.main.temp}
                            min={item.main.temp_min}
                            max={item.main.temp_max}
                        />
                    ))}
        
        
        
            </div>
  )
}

export default Home