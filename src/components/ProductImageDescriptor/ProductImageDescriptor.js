import React from 'react';
import './ProductImageDescriptor.css';
import { useState , useEffect} from 'react';

export default function ProductImageDescriptor({images,mainImage}) {
    const [focusedImage,setFocusedImage] = useState(mainImage);
    return (
        <div id="productImageDescriptor">
            <div id="focusImage" style={{backgroundImage : `url(${focusedImage})`}}></div>
            <div id="remainingImages">
                {images.map((image,index)=><div key={index} className={image===focusedImage ? "colorBorder" : "transparentBorder"} defaultValue={image} id={image} onClick={(e) => {setFocusedImage(e.target.id)}} style={{backgroundImage : `url(${image})`}} ></div>)}
            </div>
        </div>
    )
}
