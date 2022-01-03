import React from 'react';
import "./ItemList.css";
import Item from "../Item/Item";

export default function ItemList({items}) {

    return (
        <section id="listedItems" >
            {items.map((item , index) =>
                
                <Item id={`itemList${index}`} key={index} item = {item}></Item>
            )}
        </section>
    )
}
