import React from 'react';
import ItemList from '../ItemList/ItemList';
import "./RecommendedItems.css";
import Heading from '../Heading/Heading';

///hard coded //TO BE CHANGED
const getItems = () =>
[
    {id: "a723", brand : "Adidas" , name: 'addidas shoe', price : "130$" , image: "https://sport-m.com.mk/Image/Show?Pateka=%2FProductImages%2FFV7957.jpg", description : {short : 'shoe for these cold times' , details : ""} , colors : ["red" , "black" , "gray" ,"white"] , sizes : ["s","m","xl"]},
    {id: "a723", brand : "Adidas" , name: 'addidas shoe', price : "130$" , image: "https://sport-m.com.mk/Image/Show?Pateka=%2FProductImages%2FFV7957.jpg", description : {short : 'shoe for these cold times' , details : ""} , colors : ["red" , "black" , "gray" ,"white"] , sizes : ["s","m","xl"]},
    {id: "a723", brand : "Adidas" , name: 'addidas shoe', price : "130$" , image: "https://sport-m.com.mk/Image/Show?Pateka=%2FProductImages%2FFV7957.jpg", description : {short : 'shoe for these cold times' , details : ""} , colors : ["red" , "black" , "gray" ,"white"] , sizes : ["s","m","xl"]},
    {id: "a723", brand : "Adidas" , name: 'addidas shoe', price : "130$" , image: "https://sport-m.com.mk/Image/Show?Pateka=%2FProductImages%2FFV7957.jpg", description : {short : 'shoe for these cold times' , details : ""} , colors : ["red" , "black" , "gray" ,"white"] , sizes : ["s","m","xl"]},
    {id: "a723", brand : "Adidas" , name: 'addidas shoe', price : "130$" , image: "https://sport-m.com.mk/Image/Show?Pateka=%2FProductImages%2FFV7957.jpg", description : {short : 'shoe for these cold times' , details : ""} , colors : ["red" , "black" , "gray" ,"white"] , sizes : ["s","m","xl"]},
    {id: "a723", brand : "Adidas" , name: 'addidas shoe', price : "130$" , image: "https://sport-m.com.mk/Image/Show?Pateka=%2FProductImages%2FFV7957.jpg", description : {short : 'shoe for these cold times' , details : ""} , colors : ["red" , "black" , "gray" ,"white"] , sizes : ["s","m","xl"]},
    {id: "a723", brand : "Adidas" , name: 'addidas shoe', price : "130$" , image: "https://sport-m.com.mk/Image/Show?Pateka=%2FProductImages%2FFV7957.jpg", description : {short : 'shoe for these cold times' , details : ""} , colors : ["red" , "black" , "gray" ,"white"] , sizes : ["s","m","xl"]},
    {id: "a723", brand : "Adidas" , name: 'addidas shoe', price : "130$" , image: "https://sport-m.com.mk/Image/Show?Pateka=%2FProductImages%2FFV7957.jpg", description : {short : 'shoe for these cold times' , details : ""} , colors : ["red" , "black" , "gray" ,"white"] , sizes : ["s","m","xl"]},
    {id: "a723", brand : "Adidas" , name: 'addidas shoe', price : "130$" , image: "https://sport-m.com.mk/Image/Show?Pateka=%2FProductImages%2FFV7957.jpg", description : {short : 'shoe for these cold times' , details : ""} , colors : ["red" , "black" , "gray" ,"white"] , sizes : ["s","m","xl"]},
    {id: "a723", brand : "Adidas" , name: 'addidas shoe', price : "130$" , image: "https://sport-m.com.mk/Image/Show?Pateka=%2FProductImages%2FFV7957.jpg", description : {short : 'shoe for these cold times' , details : ""} , colors : ["red" , "black" , "gray" ,"white"] , sizes : ["s","m","xl"]},
]


export default function RecommendedItems() {

    return (
        <>
             <div id="moreItems">
                        <Heading text="Our recommendations"></Heading>        
                <div id="itemListController" type="button" data-bs-toggle="collapse" data-bs-target="#itemList" aria-expanded="false" aria-controls="itemList">
                    
                        <svg id="itemListControllerSvg" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" transform="rotate(90 12 12)" fill="#A41A1A"/>
                            <path d="M6 11L12 17L18 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                   
                </div>
            </div>
           

            

            <div>
                <div className="collapse collapse-vertical" id="itemList" >
                <ItemList items = {getItems()} gridcolumns={2}></ItemList>
                <div id="itemListControllerShrink" type="button" data-bs-toggle="collapse" data-bs-target="#itemList" aria-expanded="false" aria-controls="itemList">
                    <svg id="itemListControllerShrinkSvg" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" transform="rotate(-90 12 12)" fill="#A41A1A"/>
                    <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                </div>
            </div>
        </>
    )
}
