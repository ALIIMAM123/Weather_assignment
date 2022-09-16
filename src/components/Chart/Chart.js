import React, {useState} from 'react'
import { CartesianGrid, LineChart,XAxis, YAxis, Tooltip, Legend,Line, ResponsiveContainer ,AreaChart,Area } from 'recharts';
import "./chart.css"


const mydata = [
    {
      "wind": "wind",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "7 pm",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "7 pm",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "7 pm",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "7 pm",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "7 pm",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "7 pm",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "7 pm",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }




  ]
  
                              
let chartData = []
  

const Chart = ({data}) => {
  // console.log(data , "dtaa")

  const {main ,wind} ={...data}

  // console.log(main ,"xxxxx")
  // mydata.push(data?.wind)
  let check = []
  check.push(data?.main)
  console.log(mydata , "www")
  // propertyNames = Object.keys(person);
  // const [...arrayData] = {...data}
  // console.log(arrayData , "arrayData")
  //  const [chartData , setChartData] = useState({
  //   main : [],
  //   wind : []
  //  })

  check.map((each) => {
  if (each && !mydata.includes(each) ){
    mydata.push(each)
  }
 
  })  


    
  console.log(mydata[0] , "mydata")
  console.log(mydata , "muuuu")

  const {feels_like, humidity, pressure ,temp , temp_max , temp_min} ={...mydata[0]}
  console.log(temp_max ,temp_min, "temp_max")
  let minTemp  = temp_min;
  let maxTemp = temp_max;
  let obj = {
    "minTemp" : minTemp , "maxTemp" : maxTemp
  }

  if (obj && mydata.includes(obj) ){
    chartData.push(...JSON.stringify(obj))
  }
  // mydata.push(obj)
 console.log(obj, "obj")

  console.log(mydata , "ppppp")
  console.log(chartData, "chartData")
  // console.log(data, "chart_data")
  // const { main } = data;
  // console.log(main, "check");

  // const { temp_min, temp_max } = { ...main };
  // console.log(temp_min, temp_max, "temp_check");

  // const { wind } = data;
  // const { speed, deg } = { ...wind };
  // console.log(speed, deg, "wind_check_chart");
 console.log(mydata[0] , "checkkk")
  return (
    <div className="rechart_container">
        <ResponsiveContainer width="100%" height={350}>
        <AreaChart width={730} height={250} data={mydata}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#fcf519 " stopOpacity={0.5}/>
        <stop offset="95%" stopColor="#fcf519 " stopOpacity={0}/>
      </linearGradient>
      {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9" stopOpacity={0}/>
      </linearGradient> */}
    </defs>
    <XAxis dataKey="name"  strokeDasharray="1 1" />
    {/* <YAxis /> */}
    <CartesianGrid strokeDasharray="1 1" />
    <Tooltip />
    <Area type = "monotone" dataKey="uv" stroke="#F6F20F" fillOpacity={1} fill="url(#colorUv)" />
    {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
  </AreaChart>
    </ResponsiveContainer>
    </div>

    
   
  )


}

export default Chart