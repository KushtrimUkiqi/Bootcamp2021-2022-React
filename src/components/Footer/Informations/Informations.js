import React from 'react';
import "./Informations.css";

export default function Informations({informationsTitle,informationsData}) {
    return (
        <div id="informations">
            <h6>{informationsTitle}</h6>
            <div id="informationsData">
                {
                    Object.entries(informationsData)
                        .map((data,index) =>
                            <a key={index} href={data[1]}>{data[0]}</a>
                            )
                }
            </div>
        </div>
    )
}
