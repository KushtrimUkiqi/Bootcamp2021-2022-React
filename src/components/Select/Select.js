import React from 'react';
import './Select.css';

export default function Select({labelText,onChangeFunction,name,options}) {
    return (
        <div id="selectElement">
            
            <label>{labelText}</label>
            
            <select name={name}  onChange={onChangeFunction}>
                {options.map((option , index) => <option key={index} className='optionClassName' value={option.value}>{option.text}</option> )}
            </select>
        </div>
    )
}
