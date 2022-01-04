import React from 'react';
import './Product.css';
import {useState,useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import ProductImageDescriptor from '../../components/ProductImageDescriptor/ProductImageDescriptor';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
export default function Product() {

    const [productData,setProductData] = useState({});
    const [loading,setLoading] = useState(true);
    
    async function  fetchProduct()
    {
        const url = `http://127.0.0.1:8080/product?id=${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        setProductData(data);
        setLoading(false);
    }

    //id represents the id of the product that will be displayed 
    const {id} = useParams();

    useEffect(() => {
        fetchProduct();
    },[]);


     return (
       <>
            {loading && (<div className='loading'>loading</div>)}

            {loading==false && (<section>
                <section className='productDetails'>
                    <ProductImageDescriptor mainImage={productData.image} images={productData.images}></ProductImageDescriptor>
                    <ProductOptions options={productData}></ProductOptions>
                </section>

                <section className='productBriefDescription'>
                    <div><label>Product description:</label>{productData.description}</div>
                    <div><label>Product colors:</label>{productData.colors.map((color)=> color + " ")}</div>
                </section>
            </section>)}
       </>
    )
}
