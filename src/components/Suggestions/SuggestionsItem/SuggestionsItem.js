import React from 'react';
import "./SuggestionsItem.css";

export default function SuggestionsItem({data}) {
    return (
        <div>
            <p>{data.text}</p>
            <img src={data.image} alt=""/>
        </div>
    )
}
