import React from 'react';
import './BuyButton.css';

export default function BuyButton({onBuy}) {
    return (
        <div id="buyButton">
            <button>Buy</button>
            <div className="amount"><label>Amount:</label><input min={1} max={25}  type="number"></input></div>
        </div>
    )
}
