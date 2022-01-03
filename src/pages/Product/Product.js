import React from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import ProductImageDescriptor from '../../components/ProductImageDescriptor/ProductImageDescriptor';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
export default function Product() {

    //id represents the id of the product that will be displayed 
    const {id} = useParams();
    
    //TODO CHANGE WITH A CERTAIN VALUE FROM THE API
    const options = {id: "FY5933" ,name: "Adidas COURTPHASE",price: "200", description:{}, sizes:[ {size: 'XS' , available : true},{size: 'S' , available : true}, {size: 'M' , available : false}, {size: 'L' , available : true},{size: 'XL' , available : true},{size: '2XL' , available : false},{size: '3XL' , available : true}]}
    const product = {id: "a723", brand : "Adidas" , name: 'addidas shoe', price : "130$" , image: "https://www.sport-m.com.mk/ProductImages/FY5933.jpg", images: ["https://www.sport-m.com.mk/ProductImages/FY5933.jpg","https://www.sport-m.com.mk/ProductImages/FY5933_1.jpg","https://www.sport-m.com.mk/ProductImages/FY5933_2.jpg","https://www.sport-m.com.mk/ProductImages/FY5933_3.jpg"] ,  description : {short : 'shoe for these cold times' , details : ""} , colors : ["red" , "black" , "gray" ,"white"] , sizes : ["s","m","xl"]}
    return (
        <>
            <section className='productDetails'>
                <ProductImageDescriptor images={product.images}></ProductImageDescriptor>
                <ProductOptions options={options}></ProductOptions>
            </section>

            <section className='productBriefDescription'>
                <div><label>Product description:</label>{product.description.details}</div>
                <div><label>Product colors:</label>{product.colors.map((color)=> color + " ")}</div>
            </section>
        </>
    )
}
