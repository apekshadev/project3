
import './App.css';
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ProductListing from './pages/ProductListing/ProductListing';
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import "./Style/index.scss";
import Checkout  from './pages/Checkout/Checkout';
import OrderSummary from './pages/OrderSummary/OrderSummary';

function App() {
 
  return (
    <>
    <Layout>
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route exact path="/productListing" element={<ProductListing />} /> 
    <Route exact path="/category/:category" element={<ProductListing />} /> 
    <Route exact path="/products/:id" element={<ProductDetails />} /> 
    <Route exact path="/cart" element={<Cart />} /> 
    <Route exact path="/checkout" element={<Checkout />} /> 
    <Route exact path="/order_confirmation" element={<OrderSummary />} /> 
    </Routes>   
    </Layout>

 
  </>
  );
}

export default App;
