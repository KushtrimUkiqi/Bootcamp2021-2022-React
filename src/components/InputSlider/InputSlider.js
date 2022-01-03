import React from 'react';
import './InputSlider.css';

export default function InputSlider({productsPriceRange,ranges , step , setPreferredLowestPrice , setPreferredHighestPrice }) {
    return (
    <>
        <h6 id="headingInputSlider">Choose the preferred prices</h6>

        <label style={{textAlign: "right"}} className="labelInputSlider">highest price {productsPriceRange.highestPrice}</label>
        <div id="inputSlider">
            <input id="ppInputDescending" type="range" min={ranges.min} max={ranges.max} step={step} onChange={(e) => setPreferredHighestPrice(Number.parseInt(e.target.value))} />
            <input id="ppInputAscending" type="range" min={ranges.min} max={ranges.max}  step={step} onChange={(e) => setPreferredLowestPrice(Number.parseInt(e.target.value))} />
        </div>
        <label className="labelInputSlider">lowest price {productsPriceRange.lowestPrice}</label>
    </>
    )
}



