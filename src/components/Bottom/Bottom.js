import React, { useState } from "react";
import "./bottom.css";
import IMAGE from "../../assets/cloudy.png";
const Bottom = ({ data }) => {
  console.log(data, "data_received");
  // const [details , setDetails] = useState([])
  const [temp, setTemp] = useState("temp");
  const [windDetails, setWindDetails] = useState(false);
  const { main } = data;
  console.log(main, "check");

  const { temp_min, temp_max } = { ...main };
  console.log(temp_min, temp_max, "temp_check");

  const { wind } = data;
  const { speed, deg } = { ...wind };
  console.log(speed, deg, "wind_check");

  const { ...windData } = data;
  console.log(windData, "windData");
  const showTemp = (e) => {
    setTemp("setTemperature");

  };

  const showWind = (e) => {
    setTemp("setWind");
    // setWindDetails(true)
  };

  console.log(temp , "temp")
  return (
    <div className="day_temp_container">
      <div className="tabs_container">
        <div className="tab_wrapper">
          <div className="tab1 tab" onClick={showTemp} >
            Temperature
            {/* <hr className="horiz" /> */}
          </div>

          <div className="tab2 tab">Precipitation</div>
          <div className="tab3 tab" onClick={showWind}>
            Wind
          </div>
        </div>
      </div>

      <div className="day_temp_wrapper">

        {temp === "setTemperature" && <div className="content_container">
          <p className="days">Current Day</p>
          <img
            src={IMAGE}
            alt="image"
            style={{ height: "4rem", width: "4rem" }}
            className="image_weather"
          />
          <div className="two_temp">
            <>
            <p className="first_temp">
              <p className = "temp_heading">Max-Temp</p>
                 {((temp_min) - 273.15).toFixed(2)} &#8451;
              </p>
              <p className="second_temp">
              <p className = "temp_heading">Min-Temp</p>
                {((temp_max - 273.15)).toFixed(2)} &#8451;
              </p>

            </>
          </div>
        </div>}

        {temp === "setWind" && <div className="content_container">
          <p className="days">Current Day</p>
          <img
            src={IMAGE}
            alt="image"
            style={{ height: "4rem", width: "4rem" }}
            className="image_weather"
          />
          <div className="two_temp">
            <>
           
              <p className="first_temp">
              <p className = "temp_heading">Speed</p>
                 {speed} Km/hr
              </p>
              <p className="second_temp">
              <p className = "temp_heading">Degree</p>
               {deg} deg
              </p>
            </>
          </div>
        </div>}


      </div>
    </div>
  );
};

export default Bottom;
