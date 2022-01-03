import React from 'react';
import Brand from '../Brand/Brand';
import "./BrandsContainer.css";
import Heading from '../Heading/Heading';

export default function BrandsContainer({data}) {
    return (
        <>
             <Heading text="Our partners"></Heading>
                <div id="brandNames">
               
                {data.map((item,index)=>
                    <Brand key={index} data={item}></Brand>
                )}
            </div>
        </>

    )
}
