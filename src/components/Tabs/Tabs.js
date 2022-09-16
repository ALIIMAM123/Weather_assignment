import React from 'react'
import Bottom from '../Bottom/Bottom';
import "./tabs.css"
function Tabs({data}) {
  const {...windData} = data;
  console.log(windData, "windData")
 const  showTemp = () => {

  }
  return (
    <>
        {/* <div className = "tabs_container">
       <div className = "tab_wrapper">
      <div className = "tab1 tab">Temperature
      <hr  className = "horiz"/>
      </div>
     
      <div className = "tab2 tab">Precipitation</div>
      <div className = "tab3 tab" onClick = {showTemp}>Wind</div>
       </div>
    </div> */}
 
    </>
 
  )
}

export default Tabs
