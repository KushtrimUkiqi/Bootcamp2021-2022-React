import React from 'react';
import './InputSlider.css';

export default function InputSlider({productsPriceRange,ranges , step , setPreferredLowestPrice , setPreferredHighestPrice }) {
    return (
    <div id="inputSliderComponent">
        <h6 id="headingInputSlider">Choose the preferred prices</h6>

        <label style={{textAlign: "right"}} className="labelInputSlider">highest price {productsPriceRange.highestPrice} $</label>
        <div id="inputSlider">
            <input key="ppInputDescending" id="ppInputDescending" type="range" min={ranges.lowestPrice} max={ranges.highestPrice} step={step} onChange={(e) => setPreferredHighestPrice(Number.parseInt(e.target.value))} />
            <input key="ppInputAscending" id="ppInputAscending" type="range" min={ranges.lowestPrice} max={ranges.highestPrice}  step={step} onChange={(e) => setPreferredLowestPrice(Number.parseInt(e.target.value))} />
        </div>
        <label className="labelInputSlider">lowest price {productsPriceRange.lowestPrice} $</label>
    </div>
    )
}



