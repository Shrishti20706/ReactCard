import React, { useState } from 'react'
import "./style.css"
import cardAPI from "./cardAPI.js"
import MenuCard from "./CardUI"


const Restaurant = () => {
  const [cardData,setcardData]=useState(cardAPI);
  
  

  return (
    <>
     <h1 style={{textAlign:"center",margin:"30px"}}>OUR SERVICES</h1>
      <MenuCard cardData={cardData}/>
    </>
  )
}



export default Restaurant
