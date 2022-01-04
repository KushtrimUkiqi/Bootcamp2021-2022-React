import React from 'react';
import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import "./Products.css";
import ItemList from '../../components/ItemList/ItemList';
import Select from '../../components/Select/Select';
import CheckBox from '../../components/CheckBox/CheckBox';
import InputSlider from '../../components/InputSlider/InputSlider';
import MasterState from '../../classes/MasterStateObject';


export default function Product() {
    
    //id represents the category of the products to be displayed 
    const {id} = useParams();



///states that are dependent on and are changed by the api -> @apiSTATE

    //@apiSTATE
    //productsSizes represents an array of sizes for a particular category .
    //example if the category is shoes , the array should be like :  ["43","44","44","45"] ...
    //By default the array is set to be empty , during the first fetch of the api call we expect the array to be filled with the relevant sizes. 
    const [productsSizes,setProductsSizes] = useState([]);

    //@apiSTATE
    //productsPrices represents an object whith the lowest and highest price for a particular category of products .
    //By default the object is set to have two attributes lowestPrice and highestPrice , both having the value 0. During the first fetch of the api call we expect the value of the attributes to change. 
    const [productsPrices,setProductsPrices] = useState({lowestPrice: 0 , highestPrice: 0});

    //@apiSTATE
    //productsBrands represents an array of brands for a particular category .
    //By default the array is set to be empty , during the first fetch of the api call we expect the array to be filled with the all the relevant brands. 
    const [productsBrands,setProductsBrands] = useState([]);



    //hard coded value for colors !!!might be changed in the future
    let productsColors = ["White","Purple","Yellow","Green","Brown","Orange","Gray","Blue","Silver","Red","Black"];


///states that change as a result of interaction with the user  -> @userChangeableSTATE

    //@userChangeableSTATE
    //productsOrder can be : standard , price ascending , price descending .
    //@By default the value is set to be "standard";
    const [productsOrder,setProductsOrder] = useState("standard");

            //hard coded value for colors !!!might be changed in the future
            const productsOrderOptions = [{value: "standard", text: "Standard" } , {value: "price_ascending", text: "Price ascending" },{value: "price_descending", text: "Price descending" } ];
            const changeProductsOrder = val => setProductsOrder(val);

    //@userChangeableSTATE
    //products number represents the number of the products that need to be displayed , the value can be 20, 40 or 80 .
    // @By default the value is set to be 20
    const[productsNumber,setProductsNumber] = useState(20);

            //hard coded value for colors !!!might be changed in the future
            const productsNumberOptions = [{value: 20 , text : "20"},{value: 40 , text : "40"},{value: 80 , text : "80"}]
            const changeProductsNumber = val => setProductsNumber(val);
    
//function that toggles the value of the checkboxes on their respective states: //@userChangeableSTATE (productsPreferredBrand,productsPreferredColor,productsPreferedSizes)

            function toggleCheckBoxPreferences(index,nativeArray,stateArray)
            {   
                let element = nativeArray[index];
                let indexOfElement = stateArray.indexOf(element);
                console.log(indexOfElement);
                indexOfElement === -1 ?stateArray.push(element):stateArray.splice(indexOfElement,1);
            }



    //@userChangeableSTATE
    //productsPreferredBrand represents an array of brands that are selected as preferred brands , the array can contain 0 or more elements .
    //@By default the array contains 0 elements and in this situation, from the server side we will recive products from all the posssible brands.
    const[productsPreferredBrand,setProductsPreferredBrand] = useState([]);

            //Function that sets/unsets the preferred brand/s
            const toggleBrandPreferences = (index) => toggleCheckBoxPreferences(index,productsBrands,productsPreferredBrand)


    //@userChangeableSTATE
    //productsPreferredColor represents an array of colors that are selected as preferred colors , the array can contain 0 or more elements .
    //@By default the array contains 0 elements and in this situation, from the server side we will recive products with all the posssible colors.
    const[productsPreferredColor,setProductsPreferredColor] = useState([]);

            //Function that sets/unsets the preferred color/s
            const toggleColorPreferences = (index) => toggleCheckBoxPreferences(index,productsColors,productsPreferredColor)


    //@userChangeableSTATE
    //productsPriceRange represents an object wich contains the attributes : "lowestPrice" (for the lowest price that the products can be) and  "highestPrice" (for the highest price that the products can be).
    //@By default the object has attributes that have values 0 each , in this situation we expect all the products 
    const[productsPriceRange,setProductsPriceRange] = useState({lowestPrice: productsPrices.lowestPrice , highestPrice: productsPrices.highestPrice});
    
    //@userChangeableSTATE   
    //productsPreferedSizes represents an array of sizes that are selected as preferred sized , the array can contain 0 or more elements .
    //@By default the array contains 0 elements and in this situation, from the server side we will recive products with all the posssible sizes.
    const [productsPreferedSizes,setProductsPreferedSizes] = useState([]);

                //Function that sets/unsets the preferred size/s
                const toggleSizePreferences = (index) => toggleCheckBoxPreferences(index,productsSizes,productsPreferedSizes)

        
        
                const[filterTableDisplay,setFilterTableDisplay] = useState(false);

                //Function that closes all the options for filtering the products
                function setAllFilterButtonsToFalse()
                { setPbTableDisplay(false); setPsTableDisplay(false); setPcTableDisplay(false);}
        
        
                const[pbTableDisplay,setPbTableDisplay] = useState(false);
                const[pcTableDisplay,setPcTableDisplay] = useState(false);
                const[psTableDisplay,setPsTableDisplay] = useState(false);

                
    //State that is an object that in itself contains the all the @userChangeableSTATE except : productsOrder.
    const [masterState,setMasterState] = useState(masterStateGenerate())

    //function that generates an object i.e MasterState object
    function masterStateGenerate  () {
        return new MasterState(productsPriceRange,productsNumber,productsPreferredBrand,productsPreferredColor,productsPreferedSizes);};

    //function that updates the masterState
    const masterStateUpdate = () => setMasterState(masterStateGenerate());
    



    

        const[getItems,setGetItems] = useState([]);
        const [loading,setLoading] = useState(true);


    function generateURL()
    {
        const url = `http://127.0.0.1:8080/get/product/category`
        const query = `?categoryId=${id}&itemsNumber=${productsNumber}&lowestPrice=${productsPriceRange.lowestPrice}&highestPrice=${productsPriceRange.highestPrice}&colors=${productsPreferredColor}&brands=${productsPreferredBrand}&sizes=${productsPreferedSizes}`;
        return url+query;
    }

    async function fetchProducts() {
        const url = generateURL();
        const resp = await fetch(url);
        const data = await resp.json();
        setGetItems(data);
        setLoading(false);
      }

    async function fetchPrice() {
        const url  = `http://127.0.0.1:8080/get/category/prices?categoryId=${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        setProductsPrices(data);
      }

      async function fetchBrands() {
        const url  = `http://127.0.0.1:8080/get/category/brands?categoryId=${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        setProductsBrands(data);
      }

      async function fetchSizes() {
        const url  = `http://127.0.0.1:8080/get/category/sizes?categoryId=${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        setProductsSizes(data);
      }
  
       useEffect(() => {
            fetchPrice();
            fetchBrands();
            fetchSizes();
          }, [])
  
          useEffect(() => {
            fetchProducts();
          }, [masterState])

          useEffect(() => {
             reorderProducts();
          }, [productsOrder]);


          function reorderProducts(){
              
            let arr = getItems;
                if(productsOrder === "price_ascending")
                { 
                    for(var i = 0; i < arr.length; i++){
                    
                    // Last i elements are already in place  
                    for(var j = 0; j < ( arr.length - i -1 ); j++){
                        
                      // Checking if the item at present iteration 
                      // is greater than the next iteration
                      
                      if(arr[j] > arr[j+1]){
                          
                        // If the condition is true then swap them
                        var temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j+1] = temp
                      }
                    }
                  }}
                else if(productsOrder === "price_descending")
                { 
                    for(var i = 0; i < arr.length; i++){
                    
                    // Last i elements are already in place  
                    for(var j = 0; j < ( arr.length - i -1 ); j++){
                        
                      // Checking if the item at present iteration 
                      // is greater than the next iteration
                      
                      if(arr[j] < arr[j+1]){
                          
                        // If the condition is true then swap them
                        var temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j+1] = temp
                      }
                    }
                  }}
                setGetItems(arr);
          }

    return (
        <section id="productBody">
           
                

                <div id="firstElement">
                    <Select labelText="Order by" onChangeFunction={(e)=> changeProductsOrder(e.target.value)} name="sort" options={productsOrderOptions}></Select>
                    <Select labelText="Display" onChangeFunction={(e)=> changeProductsNumber(e.target.value)} name="display" options={productsNumberOptions}></Select>
                </div>

                <button id='filterTable' className={filterTableDisplay ? "clickedButton" : ""} onClick={() => {setFilterTableDisplay(!filterTableDisplay); if(filterTableDisplay)setAllFilterButtonsToFalse();}}>Filter</button>

                <div id="secondElement" className={filterTableDisplay ? "filterTable" : "filterTableNone"}>

                    <div id='filterOptions' >
                        <button id="finishFilter" onClick={masterStateUpdate}>done</button>
                        <InputSlider productsPriceRange={productsPriceRange} ranges={productsPrices}  step={5} setPreferredLowestPrice={(number) => {setProductsPriceRange({lowestPrice : number ,highestPrice : productsPriceRange.highestPrice})}} setPreferredHighestPrice={(number) => {setProductsPriceRange({lowestPrice : productsPriceRange.lowestPrice ,highestPrice : 999 - number })}} ></InputSlider>
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

                {loading && (<div className='loading'><p>loading</p></div>)}
                {loading!==true && (<ItemList items = {getItems}></ItemList>)}
            </div>

        

        </section>
    )
}
