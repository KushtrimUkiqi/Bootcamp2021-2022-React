import React from 'react';
import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import "./Products.css";
import ItemList from '../../components/ItemList/ItemList';
import Select from '../../components/Select/Select';
import CheckBox from '../../components/CheckBox/CheckBox';
import InputSlider from '../../components/InputSlider/InputSlider';
import Pager from '../../components/Pager/Pager';
export default function Product() {
    
    //id represents the category of the products to be displayed 
    const {id} = useParams();

    //productsSizes represents an array of sizes for a particular category .
    //example if the category is shoes , the array should be like :  ["43","44","44","45"] ...
    //By default the array is set to be empty , during the first fetch of the api call we expect the array to be filled with the relevant sizes. 
    const [productsSizes,setProductsSizes] = useState(["xs","s","m","l","xl","xxl"]);

     //productsBrands represents an array of brands for a particular category .
      //By default the array is set to be empty , during the first fetch of the api call we expect the array to be filled with the all the relevant brands. 
    const [productsBrands,setProductsBrands] = useState(["Illyrian Bloodline","KTM","Zara","Adidas","Nike","Code4Life"]);


    let productsColors = ["White","Purple","Yellow","Green","Brown","Orange","Gray","Blue","Silver","Red","Black"];


    //productsOrder can be : standard , price ascending , price descending .
    //@by default the value is set to be "standard";
    const [productsOrder,setProductsOrder] = useState("standard");

        const productsOrderOptions = [{value: "standard", text: "Standard" } , {value: "price_ascending", text: "Price ascending" },{value: "price_descending", text: "Price descending" } ];
            const changeProductsOrder = val => setProductsOrder(val);

    //products number represents the number of the products that need to be displayed , the value can be 20, 40 or 80 .
    // @By default the value is set to be 20
    const[productsNumber,setProductsNumber] = useState(20);

        const productsNumberOptions = [{value: "20" , text : "20"},{value: "40" , text : "40"},{value: "80" , text : "80"}]
            const changeProductsNumber = val => setProductsNumber(val);
    
        //productsPreferredBrand represents an array of brands that are selected as preferred brands , the array can contain 0 or more elements .
        //@By default the array contains 0 elements and in this situation, from the server side we will recive products from all the posssible brands.
        const[productsPreferredBrand,setProductsPreferredBrand] = useState([]);

            //Function that sets/unsets the preferred brand/s
            function toggleBrandPreferences(index){}


        //productsPreferredBrand represents an array of colors that are selected as preferred colors , the array can contain 0 or more elements .
        //@By default the array contains 0 elements and in this situation, from the server side we will recive products with all the posssible colors.
        const[productsPreferredColor,setProductsPreferredColor] = useState([]);

            //Function that sets/unsets the preferred color/s
            function toggleColorPreferences(index){}

        //productsPriceRange represents an object wich contains the attributes : "lowestPrice" (for the lowest price that the products can be) and  "highestPrice" (for the highest price that the products can be).
        //@By default the object has attributes that have values 0 each , in this situation we expect all the products 
        const[productsPriceRange,setProductsPriceRange] = useState({lowestPrice: 0 , highestPrice: 999});
    
            
        //productsPreferedSizes represents an array of sizes that are selected as preferred sized , the array can contain 0 or more elements .
        //@By default the array contains 0 elements and in this situation, from the server side we will recive products with all the posssible sizes.
        const [productsPreferedSizes,setProductsPreferedSizes] = useState([]);

                //Function that sets/unsets the preferred size/s
                function toggleSizePreferences(index){}

        const[filterTableDisplay,setFilterTableDisplay] = useState(false);

                //Function that closes all the options for filtering the products
                function setAllFilterButtonsToFalse()
                { setPbTableDisplay(false); setPsTableDisplay(false); setPcTableDisplay(false);}
        
        const[pbTableDisplay,setPbTableDisplay] = useState(false);
        const[pcTableDisplay,setPcTableDisplay] = useState(false);
        const[psTableDisplay,setPsTableDisplay] = useState(false);




////TODO : an api endpoint from the server side for fetching data
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


    return (
        <section id="productBody">
           
                

                <div id="firstElement">
                    <Select labelText="Order by" onChangeFunction={(e)=> changeProductsOrder(e.target.value)} name="sort" options={productsOrderOptions}></Select>
                    <Select labelText="Display" onChangeFunction={(e)=> changeProductsNumber(e.target.value)} name="display" options={productsNumberOptions}></Select>
                </div>

                <button id='filterTable' className={filterTableDisplay ? "clickedButton" : ""} onClick={() => {setFilterTableDisplay(!filterTableDisplay); if(filterTableDisplay)setAllFilterButtonsToFalse();}}>Filter</button>

                <div id="secondElement" className={filterTableDisplay ? "filterTable" : "filterTableNone"}>

                    <div id='filterOptions' >
                        <InputSlider productsPriceRange={productsPriceRange} ranges={{min: 0 , max: 999}}  step={5} setPreferredLowestPrice={(number) => {setProductsPriceRange({lowestPrice : number ,highestPrice : productsPriceRange.highestPrice})}} setPreferredHighestPrice={(number) => {setProductsPriceRange({lowestPrice : productsPriceRange.lowestPrice ,highestPrice : 999 - number })}} ></InputSlider>
                        <button className={ pbTableDisplay ? "clickedButton" : "s"} id="pbButton" onClick={() => {setPbTableDisplay(!pbTableDisplay)} }>Preferred brands</button>
                        <button className={ psTableDisplay ? "clickedButton" : "s"} id="psButton" onClick={() => {setPsTableDisplay(!psTableDisplay)} }>Preferred sizes</button>
                        <button className={ pcTableDisplay ? "clickedButton" : "s"} id="pcButton" onClick={() => {setPcTableDisplay(!pcTableDisplay)} }>Preferred colors</button>
                    </div>

                </div>


            <div id="thirdElement">

                    <CheckBox  tableDisplay={pbTableDisplay} productsX={productsBrands} nameCheckBox="preferredBrands" onChangeCheckBox={(index) => toggleBrandPreferences(index)}></CheckBox>

                    <CheckBox tableDisplay={psTableDisplay} productsX={productsSizes} nameCheckBox="preferredSizes" onChangeCheckBox={(index) => toggleSizePreferences(index)}></CheckBox>

                    <CheckBox tableDisplay={pcTableDisplay} productsX={productsColors} nameCheckBox="preferredColors" onChangeCheckBox={(index) => toggleColorPreferences(index)}></CheckBox>

            </div>

            <div id="fourthElement">
                <ItemList items = {getItems()}></ItemList>
            </div>

             <div id="fifthElement">
                            {/* hard coded */}
                            <Pager pages={2} current={2}></Pager>
             </div>
        

        </section>
    )
}
