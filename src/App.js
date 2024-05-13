
import React, { useEffect, useState } from 'react';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProductsList from "./ProductsList";
import Home from "./Home";
import ProductPage from "./ProductPage";
import {Route, Routes} from "react-router-dom";
import Varieties from "./Varieties";
import Cart from "./Cart";
import AdminPanel from "./AdminPanel";
import ProductsAdminPage from "./admin-products/ProductsAdminPage";
import fetchVarietiesData from './fetchVarietiesData';
import Payment from './Payment';
import Orders from "./admin-products/Orders";
export default function App()
{

  const [varieties, setVarieties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVarietiesData();
      setVarieties(data);
    };

    fetchData();
  }, []);
  
  return (
    <>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LoginForm/>}/>
    <Route path="/signup" element={<SignupForm/>}/>
    <Route path="/products" element={<ProductsList/>}/>
    <Route path="/cart" element={<Cart/>}/>
    {/*<Route path="/admin" element={<AdminPanel/>}/>*/}
    <Route path="/payment" element={<Payment />} />
    <Route path="/admin" element={<ProductsAdminPage/>}/>
    <Route path="/orders" element={<Orders/>}/>
    {
  varieties.map((product) => (
    <Route key={product.id} path={`/products/${product.id}`} element={<ProductPage product={product} />} />
  ))
}
    </Routes>
    

    </>
  )
}