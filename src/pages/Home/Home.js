import "./Home.css";
import React from 'react';
import SaleActions from "../../components/SaleActions/SaleActions";
import RecommendedItems from "../../components/RecommendedItems/RecommendedItems";
import BrandsContainer from "../../components/BrandsContainer/BrandsContainer";

function getBrands()
{
    let arr = [];

    for(let i = 0 ;i<12;i++)
    {
        arr[i] = {brand: "Adidas" , image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/453px-Adidas_Logo.svg.png"};
    }

    return arr;
}

function Home() {
    return (
        <section id="body">
            <SaleActions id="saleAction"></SaleActions>
            <RecommendedItems id="recommendedItems"></RecommendedItems>
            <BrandsContainer data ={ getBrands()}></BrandsContainer>
        </section>
    )
}

export default Home
