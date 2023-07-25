import { Routes, Route } from "react-router-dom"
import LogIn from "../login/Login.jsx"
import Signup from "../signup/Signup.jsx";
import Home from "../home/Home.jsx";


export const RouteHandler = () =>{
    return(
        <>   
            <Routes>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Login" element={<LogIn/>}/>
              <Route path="/Signup" element={<Signup/>}/>
            </Routes>
        </>
    );
}