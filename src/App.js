import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import cookie from "react-cookie";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation"
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import Account from './pages/Account/Account';
import Search from './pages/Search/Search';
import SavedItems from './pages/SavedItems/SavedItems';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';


function App() {
  return (
    <div>
         <Router>
              <Navigation></Navigation>
                  <Routes>
                    <Route key="my-cart" path="/my/cart" element={<Cart/>}/>
                    <Route key="search" path="/search" element={<Search/>} />
                    <Route key="saved-items" path="/saved/items" element={<SavedItems/>} />
                    <Route key="account" path="/account" element={<Account/>} />
                    <Route key="product" path="/product/:id" element={<Product/>} />
                    <Route key="products" path="/products/:id" element={<Products/>} />
                    <Route key="home" path="/*" element={<Home/>}/> 
                  </Routes>
              <Footer></Footer>
         </Router>
    </div>
  )
}

export default App
