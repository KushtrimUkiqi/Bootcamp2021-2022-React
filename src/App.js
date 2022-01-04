import {React , Fragment} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import cookie from "react-cookie";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation"
import ProtectedAccountRoute from './pages/ProtectedAccountRoute/ProtectedAccountRoute'
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import Account from './pages/Account/Account';
import Search from './pages/Search/Search';
import SavedItems from './pages/SavedItems/SavedItems';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import LogInPage from './pages/LogInPage/LogInPage';
import Register from './pages/Register/Register';


function App() {
  return (
    <div>
         <Router>
         <Fragment>
              <Navigation></Navigation>
                  <Routes>
                    <Route key="my-cart" path="/my/cart" element={<Cart/>}/>
                    <Route key="search" path="/search" element={<Search/>} />
                    <Route key="saved-items" path="/saved/items" element={<SavedItems/>} />
                    <Route key="account" exact path='/account' element={<ProtectedAccountRoute/>}>
                          <Route exact path='/account' element={<Account/>}/>
                    </Route>
                    <Route key="register" path="/register"element={<Register />} />
                    <Route key="logIn" path="/login" element={<LogInPage/>} />
                    <Route key="product" path="/product/:id" element={<Product/>} />
                    <Route key="products" path="/products/:id" element={<Products/>} />
                    <Route key="home" path="/*" element={<Home/>}/> 
                  </Routes>
              <Footer></Footer>
              </Fragment>
         </Router>
    </div>
  )
}

export default App
