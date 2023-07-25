import { Routes, Route } from "react-router-dom"
import LogIn from "../login/Login.jsx"


export const RouteHandler = () =>{
    return(
        <>   
            <Routes>
            
              <Route path="/Login" element={<LogIn/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
              
            </Routes>
        </>
    );
}