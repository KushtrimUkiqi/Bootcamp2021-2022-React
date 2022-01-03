import React from 'react';
import {useState} from 'react';
import './SizeTable.css';
// sizes is an array of objects which contains the size and the availability i.e {size: 'M' , available : false}
export default function SizeTable({sizes}) {
    const [selectedSize,setSelectedSize] = useState("");
    return (
        <div id='sizeTableComponent'>
        <label>Pick your size</label>
            <div id="sizeTable">
            {sizes.map((size,index)=> <div key={index} id={size.size}  className={(size.available ? "available" : "notAvailable") + " " + (size.size===selectedSize ? "colorBorder" : "transparentBorder")} onClick={(e) => {if(size.available)setSelectedSize(e.target.id)}}>{size.size}</div>)}
            </div>
        </div>
    )
}
