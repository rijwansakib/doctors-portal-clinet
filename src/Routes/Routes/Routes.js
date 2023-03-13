import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import Home from "../../pages/Home/Home/Home"
import Testimonial from "../../pages/Home/Testimonial/Testimolial";
import Login from "../../pages/Login/Login";
import SiginUp from "../../pages/Signup/SiginUp";

export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SiginUp></SiginUp>
            },
            {
                path:'/appoinment',
                element:<Appoinment></Appoinment>

            },
            {
                path:'/reviews',
                element:<Testimonial></Testimonial>

            },
        ]
    }
])