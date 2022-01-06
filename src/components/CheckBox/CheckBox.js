import React from 'react';
import './CheckBox.css';

export default function CheckBox({tableDisplay,productsX,nameCheckBox,onChangeCheckBox}) {
    return (
    <div id='checkBoxComponent' className={tableDisplay ? "productTableDisplay" : "productTableDisplayNone" }>
        <h6 id="componentText">Choose the preferred {" " + nameCheckBox.toLowerCase().substr(9,nameCheckBox.length)}</h6>
        {productsX
            .map((itemContext,index) => <div key={index} className='checkBoxLine'><input type="checkbox" name={nameCheckBox} value={itemContext} onChange={() => onChangeCheckBox(index)} /><label>{itemContext}</label></div>)
        }
  
    </div>
    )
}
