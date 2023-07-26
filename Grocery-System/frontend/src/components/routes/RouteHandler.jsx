import { Routes, Route } from "react-router-dom"
import LogIn from "../login/Login.jsx"
import Signup from "../signup/Signup.jsx";
import Home from "../home/Home.jsx";
import AdminLogin from "../adminLogin/AdminLogin.jsx";
import AdminDash from "../adminDash/AdminDash.jsx";
import ItemUpdate from "../itemUpdate/ItemUpdate.jsx";
import Cart from "../cart/Cart.jsx";
import Order from "../order/Order.jsx"


export const RouteHandler = () =>{
    return(
        <>   
            <Routes>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Login" element={<LogIn/>}/>
              <Route path="/Signup" element={<Signup/>}/>
              <Route path='/admin' element={<AdminLogin/>}/>
              <Route path="/admindash" element={<AdminDash/>}/>
              <Route path="/itemUpdate/:id" element={<ItemUpdate/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path='/order' element={<Order/>}/>
            </Routes>
        </>
    );
}