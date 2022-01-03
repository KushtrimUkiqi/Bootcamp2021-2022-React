import React from 'react'
import "./Navigation.css";
import { Link } from 'react-router-dom';
import NavigationTable from './NavigationTable/NavigationTable';
import {useState} from 'react';


//id starts with "brand" + number 
function getNavigationBrands()
{
    return [{
        id: "brand0",
        name: "ILLYRIAN BLOODLINE"
      }, {
        id: "brand1",
        name: "KTM"
      }, {
        id: "brand2",
        name: "ADIDAS"
      }, {
        id: "brand3",
        name: "ZARA"
      }, {
        id: "brand4",
        name: "H&M"
      }, {
        id: "brand5",
        name: "TOMMY HILFIGER"
      }];
}

//id starts with "m" + number 
function getManCategories()
{
    return  [{
        id: "m0",
        name: "COATS"
      }, {
        id: "m1",
        name: "JACKETS"
      }, {
        id: "m2",
        name: "OVERSHIRTS"
      }, {
        id: "m3",
        name: "SUITS"
      }, {
        id: "m4",
        name: "BLAZERS"
      }, {
        id: "m5",
        name: "TRACKSUITS"
      }, {
        id: "m6",
        name: "HOODIES | SWEATSHIRTS"
      }, {
        id: "m7",
        name: "SHIRTS"
      }, {
        id: "m8",
        name: "T-SHIRTS"
      }, {
        id: "m9",
        name: "POLO SHIRTS"
      }, {
        id: "m10",
        name: "TROUSERS"
      }, {
        id: "m11",
        name: "JEANS"
      }, {
        id: "m12",
        name: "SHOES"
      }, {
        id: "m13",
        name: "BAGS | BACKPACKS"
      }, {
        id: "m14",
        name: "ACCESSORIES"
      }];
}

//id starts with "w" + number 
function getWomanCategories()
{
    return [{
        id: "w0",
        name: "JACKETS | OVERSHIRTS"
      }, {
        id: "w1",
        name: "BLAZERS"
      }, {
        id: "w2",
        name: "DRESSES"
      }, {
        id: "w3",
        name: "SWEATSHIRTS"
      }, {
        id: "w4",
        name: "T-SHIRTS"
      }, {
        id: "w5",
        name: "TROUSERS"
      }, {
        id: "w6",
        name: "JEANS"
      }, {
        id: "w7",
        name: "SKIRTS"
      }, {
        id: "w8",
        name: "SUITS"
      }, {
        id: "w9",
        name: "CO-ORD SETS"
      }, {
        id: "w10",
        name: "SHOES"
      }, {
        id: "w11",
        name: "BAGS"
      }, {
        id: "w12",
        name: "ACCESSORIES"
      }, {
        id: "w13",
        name: "BEAUTY"
      }, {
        id: "w14",
        name: "SPECIAL PRICES"
      }, {
        id: "w15",
        name: "GIFT GUIDENEW"
      }, {
        id: "w16",
        name: "JOIN LIFE COLLECTION"
      }];
}

//id starts with "k" + number 
function getBoysCategories()
{
    return [{
        id: "k0",
        name: "SWEATSHIRT"
      }, {
        id: "k1",
        name: "SWEATPANTS"
      }, {
        id: "k2",
        name: "T-SHIRT"
      }, {
        id: "k3",
        name: "JEAN"
      }, {
        id: "k4",
        name: "TROUSERS"
      }, {
        id: "k5",
        name: "SHIRT"
      }, {
        id: "k6",
        name: "PYJAMAS BOTTOM"
      }, {
        id: "k7",
        name: "CARDIGAN TRACK TOP"
      }, {
        id: "k8",
        name: "SLIPPER BOOTS"
      }, {
        id: "k9",
        name: "SLEEP BAG"
      }, {
        id: "k10",
        name: "HOME SLIPPERS"
      }, {
        id: "k11",
        name: "TREKKING BOOTS"
      }, {
        id: "k12",
        name: "BRIEF"
      }, {
        id: "k13",
        name: "PYJAMAS TOP"
      }, {
        id: "k14",
        name: "UNDERVEST"
      }, {
        id: "k15",
        name: "BOOTS"
      }, {
        id: "k16",
        name: "SNEAKERS"
      }, {
        id: "k17",
        name: "JEAN JACKET"
      }, {
        id: "k18",
        name: "JACKET"
      }, {
        id: "k19",
        name: "UNDERSHIRT"
      }, {
        id: "k20",
        name: "JEAN SHORTS"
      }, {
        id: "k21",
        name: "TRAINER SOCKS"
      }, {
        id: "k22",
        name: "BELT"
      }, {
        id: "k23",
        name: "JEAN SHIRT"
      }, {
        id: "k24",
        name: "SWIM SHORTS"
      }, {
        id: "k25",
        name: "HAT"
      }, {
        id: "k26",
        name: "HOME BOOTS"
      }, {
        id: "k27",
        name: "COAT"
      }];
}

//id starts with "g" + number 
function getGirlsCategories()
{
    return [{
        id: "g0",
        name: "SWEATSHIRT"
      }, {
        id: "g1",
        name: "T-SHIRT"
      }, {
        id: "g2",
        name: "JUMPER"
      }, {
        id: "g3",
        name: "DRESS"
      }, {
        id: "g4",
        name: "PYJAMAS SET"
      }, {
        id: "g5",
        name: "TROUSERS"
      }, {
        id: "g6",
        name: "SWEATPANTS"
      }, {
        id: "g7",
        name: "SHIRT"
      }, {
        id: "g8",
        name: "UNDERSHIRT"
      }, {
        id: "g9",
        name: "BLOUSE"
      }, {
        id: "g10",
        name: "JEAN"
      }, {
        id: "g11",
        name: "SHORT COAT"
      }, {
        id: "g12",
        name: "COAT"
      }, {
        id: "g13",
        name: "BOOTS"
      }, {
        id: "g14",
        name: "JEAN DRESS"
      }, {
        id: "g15",
        name: "JEAN OVERALLS"
      }, {
        id: "g16",
        name: "TRAINER SOCKS"
      }, {
        id: "g17",
        name: "JEAN JACKET"
      }, {
        id: "g18",
        name: "JACKET"
      }, {
        id: "g19",
        name: "SNEAKERS"
      }, {
        id: "g20",
        name: "RAINCOAT"
      }, {
        id: "g21",
        name: "TREKKING BOOTS"
      }, {
        id: "g22",
        name: "HOME SLIPPERS"
      }, {
        id: "g23",
        name: "GLOVES"
      }, {
        id: "g24",
        name: "TREKKING"
      }, {
        id: "g25",
        name: "SOCKS"
      }, {
        id: "g26",
        name: "HEADBAND"
      }, {
        id: "g27",
        name: "SLIPPER BOOTS"
      }, {
        id: "g28",
        name: "BACK PACK"
      }, {
        id: "g29",
        name: "SWIMSUIT"
      }, {
        id: "g30",
        name: "HAIR PIN"
      }, {
        id: "g31",
        name: "TRENCH COAT"
      }, {
        id: "g32",
        name: "BAG"
      }, {
        id: "g33",
        name: "SCARF"
      }, {
        id: "g34",
        name: "HAT"
      }, {
        id: "g35",
        name: "HOME BOOTS"
      }, {
        id: "g36",
        name: "CROSS BAG"
      }, {
        id: "g37",
        name: "SANDALS"
      }, {
        id: "g38",
        name: "BRACELET"
      }, {
        id: "g39",
        name: "HAIR ACCESSORY"
      }, {
        id: "g40",
        name: "RING"
      }, {
        id: "g41",
        name: "SWIMMING CAP"
      }, {
        id: "g42",
        name: "TOY"
      }, {
        id: "g43",
        name: "HAIR COMB"
      }, {
        id: "g44",
        name: "HAIRGRIP"
      }];
}

function Navigation() {

    const [emptyCard,cardIsEmpty] = useState(false);
    const [emptySavedItems,savedItemsIsEmpty] = useState(false);
    const [loggedIn,userLoggedIn]  = useState(true);



    return (
        <>
        
        <nav>

        <div id="logo">
            <Link to="/">
                <svg  viewBox="0 0 83 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3477 27.4043L7.80859 29.9434V38H0.75293V0.5H7.80859V21.2764L9.17578 19.5186L15.9385 11.584H24.4102L14.8643 22.5947L25.2402 38H17.1348L10.3477 27.4043ZM35.9092 5.08984V11.584H40.4258V16.7598H35.9092V29.9434C35.9092 30.9199 36.0964 31.6198 36.4707 32.043C36.8451 32.4661 37.5612 32.6777 38.6191 32.6777C39.4004 32.6777 40.0921 32.6208 40.6943 32.5068V37.8535C39.3109 38.2767 37.8867 38.4883 36.4219 38.4883C31.474 38.4883 28.9512 35.9899 28.8535 30.9932V16.7598H24.9961V11.584H28.8535V5.08984H35.9092Z" fill="black"/>
                    <path d="M50.9727 11.584L51.1924 14.5381C53.0641 12.2432 55.5951 11.0957 58.7852 11.0957C62.1868 11.0957 64.5225 12.4385 65.792 15.124C67.6475 12.4385 70.2923 11.0957 73.7266 11.0957C76.5911 11.0957 78.7233 11.9339 80.123 13.6104C81.5228 15.2705 82.2227 17.777 82.2227 21.1299V38H75.1426V21.1543C75.1426 19.6569 74.8496 18.5664 74.2637 17.8828C73.6777 17.1829 72.6442 16.833 71.1631 16.833C69.0472 16.833 67.5824 17.8421 66.7686 19.8604L66.793 38H59.7373V21.1787C59.7373 19.6488 59.4362 18.542 58.834 17.8584C58.2318 17.1748 57.2064 16.833 55.7578 16.833C53.7559 16.833 52.3073 17.6631 51.4121 19.3232V38H44.3564V11.584H50.9727Z" fill="#A41A1A"/>
                </svg>
            </Link>
        </div>
      
        <div id="categories" data-bs-toggle="collapse" href="#navigationList" role="button" aria-expanded="false" aria-controls="navigationList">
        <div data-bs-toggle="collapse" href="#maleTable" role="button" aria-expanded="false" aria-controls="maleTable" >MEN</div> /
        <div data-bs-toggle="collapse" href="#femaleTable" role="button" aria-expanded="false" aria-controls="femaleTable">WOMEN</div> / 
        <div data-bs-toggle="collapse" href="#boysTable" role="button" aria-expanded="false" aria-controls="boysTable">BOYS</div> / 
        <div data-bs-toggle="collapse" href="#girlsTable" role="button" aria-expanded="false" aria-controls="girlsTable">GIRLS</div> / 
        <div data-bs-toggle="collapse" href="#brandsTable" role="button" aria-expanded="false" aria-controls="brandsTable">BRANDS</div>
        </div>

        <div id="toolbar">

                <Link to="/my/cart">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke={emptyCard ? "black" : "#A41A1A" } stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill={emptyCard ? "none" : "#A41A1A" } />
                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke={emptyCard ? "black" : "#A41A1A" }  stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill={emptyCard ? "none" : "#A41A1A" } />
                <path  d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke={emptyCard ? "black" : "#A41A1A" } stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill={emptyCard ? "none" : "#A41A1A" } />
                </svg>
                </Link>

                <Link to="search">
                    <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 21L16.65 16.65" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>

                <Link to="/saved/items">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.42 4.58002C19.9183 4.07659 19.3222 3.67716 18.6658 3.40461C18.0094 3.13206 17.3057 2.99176 16.595 2.99176C15.8843 2.99176 15.1806 3.13206 14.5242 3.40461C13.8678 3.67716 13.2717 4.07659 12.77 4.58002L12 5.36002L11.23 4.58002C10.7283 4.07659 10.1322 3.67716 9.47582 3.40461C8.81944 3.13206 8.11571 2.99176 7.40499 2.99176C6.69428 2.99176 5.99055 3.13206 5.33417 3.40461C4.67779 3.67716 4.08167 4.07659 3.57999 4.58002C1.45999 6.70002 1.32999 10.28 3.99999 13L12 21L20 13C22.67 10.28 22.54 6.70002 20.42 4.58002Z" stroke={emptySavedItems ? "black" : "#A41A1A" } stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill={emptySavedItems ? "none" : "#A41A1A" } />
                    </svg>
                </Link>

                <Link to="/account">
                <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke={loggedIn ? "#A41A1A" : "black" } stroke-width="1" fill={loggedIn ? "#A41A1A" : "none" } stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={loggedIn ? "#A41A1A" : "black" }  fill={loggedIn ? "#A41A1A" : "none" } stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </Link>


          


        </div>

        <div id="burger" data-bs-toggle="collapse" href="#navigationList" role="button" aria-expanded="false" aria-controls="navigationList">
            <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 6H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 18H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>  

            
        
        </nav>

        <div class="collapse multi-collapse" id="navigationList">

                 <div class="categoriesButton" data-bs-toggle="collapse" href="#maleTable" role="button" aria-expanded="false" aria-controls="maleTable">MAN</div>
                    <NavigationTable id="maleTable" className="collapse multi-collapse" links={getManCategories()}></NavigationTable>
                 <div class="categoriesButton" data-bs-toggle="collapse" href="#femaleTable" role="button" aria-expanded="false" aria-controls="femaleTable">WOMAN</div>
                    <NavigationTable id="femaleTable" className="collapse multi-collapse" links={getWomanCategories()}></NavigationTable>
                 <div class="categoriesButton" data-bs-toggle="collapse" href="#boysTable" role="button" aria-expanded="false" aria-controls="boysTable">BOYS</div>
                     <NavigationTable id="boysTable" className="collapse multi-collapse" links={getBoysCategories()}></NavigationTable>
                <div class="categoriesButton" data-bs-toggle="collapse" href="#girlsTable" role="button" aria-expanded="false" aria-controls="boysTable">GIRLS</div>
                     <NavigationTable id="girlsTable" className="collapse multi-collapse" links={getGirlsCategories()}></NavigationTable>
                 <div class="categoriesButton" data-bs-toggle="collapse" href="#brandsTable" role="button" aria-expanded="false" aria-controls="brandsTable">BRANDS</div>
                    <NavigationTable id="brandsTable" className="collapse multi-collapse" links={getNavigationBrands()}></NavigationTable>
       
        </div>
    
        </>
    )
}




export default Navigation



