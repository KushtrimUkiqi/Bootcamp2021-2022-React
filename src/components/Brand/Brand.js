import React from 'react';
import "./Brand.css";

export default function Brand({data}) {
    return (
        <div id="brand">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png' alt={data.brand}/>
        </div>

    )
}
