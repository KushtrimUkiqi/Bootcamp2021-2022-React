import React from 'react';
import "./Suggestions.css";
import SuggestionsItem from "./SuggestionsItem/SuggestionsItem";

export default function Suggestions({data}) {
    return (
        <>
                {data.map((item,index) =>
                <SuggestionsItem key={index} data={item}></SuggestionsItem>
            )}
        </>
    )
}
