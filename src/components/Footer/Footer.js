import React from 'react';
import "./Footer.css";
import Informations from './Informations/Informations';
// import MyCard from '../MyCard/MyCard';
import Legal from '../Legal/Legal';
import ContactUs from './ContactUs/ContactUs';
import Copyright from './Copyright/Copyright';


function informationsData()
{
    return  {
                About : "/about" , 
                Contact : "/contact" , 
                Shops : "/shops" , 
                Career : "/career"
            };
}

export default function Footer() {
    return (
        <footer>
           <div id="footerInformations">
                <Informations key="informations" informationsTitle="Informations" informationsData={informationsData()}></Informations>
                <Informations key="shoppingCart" informationsTitle="My shopping cart" informationsData={informationsData()}></Informations> 
           </div>       
            <div id="footerData">
                <Legal></Legal>
                <ContactUs></ContactUs>
                <Copyright></Copyright>
            </div>
        </footer>
    )
}
