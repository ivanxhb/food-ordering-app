// This is for routing purposes
import {BrowserRouter, Route, Routes} from "react-router-dom";

import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import PaymentSuccess from "../pages/PaymentSuccess";
import Register from "../pages/Register";

// the component
const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/menu" element = {<Menu />} />
        <Route path = "/cart" element = {<Cart />} />
        <Route path = "/payment-sucess" element = {<PaymentSuccess />} />
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation;