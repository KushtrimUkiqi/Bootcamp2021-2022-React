import React from 'react';
import './ProductImageDescriptor.css';
import { useState , useEffect} from 'react';

export default function ProductImageDescriptor({images}) {
    const [focusedImage,setFocusedImage] = useState("https://www.sport-m.com.mk/ProductImages/FY5933.jpg");
    return (
        <div id="productImageDescriptor">
            <div id="focusImage" style={{backgroundImage : `url(${focusedImage})`}}></div>
            <div id="remainingImages">
                {images.map((image,index)=><div key={index} className={image===focusedImage ? "colorBorder" : "transparentBorder"} defaultValue={image} id={image} onClick={(e) => {setFocusedImage(e.target.id)}} style={{backgroundImage : `url(${image})`}} ></div>)}
            </div>
        </div>
    )
}
