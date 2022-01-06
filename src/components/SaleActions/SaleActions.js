import React from 'react'
import "./SaleActions.css";
import { useState, useEffect } from 'react';
import Item from '../Item/Item';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}



export default function SaleActions() {
    const[windowDimensions,setWindowDimensions] = useState(getWindowDimensions());
    
    function getImgs()
    {
        if(windowDimensions.width <= 768)
        {

          //,"https://lp2.hm.com/hmgoepprod?set=source[/7e/bd/7ebd3c64f2f07b0bc3642d88c407093a7f4c5154.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]","https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcb%2F61%2Fcb619b695ecbeaeffc1be64e04ff80a674e65ef8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]","https://lp2.hm.com/hmgoepprod?set=source[/19/ef/19ef7a4bae2bc5db23302ff8bc14673b259e54cf.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"
            return ["https://www.sport-m.com.mk/HomeBanner/001/SM1-3_Mobile.png","https://www.sport-m.com.mk/HomeBanner/001/SM1-5_Mobile.png"];
        }

        return ["https://www.sport-m.com.mk/HomeBanner/001/SM1-3.png","https://sport-m.com.mk/HomeBanner/001/SM1-5.png","https://www.sport-m.com.mk/HomeBanner/003/SM4.png"];
    }
    
    return (

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
   
    {getImgs().map((item,index)=>
        
            
            index===0 ? 
            <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            :
             <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${index}`} aria-label={`Slide ${index}`}></button>


        
    )}
  </div>
  <div className="carousel-inner">

        {getImgs().map((item,index) => 
            <div key={index} className={`carousel-item ${index===0 ? "active" : ""}`}>
                <img key={index} src={item} className="d-block w-100" alt="..."/>
            </div>
        )}
    

  </div>
</div>
    )
}
