import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import Home from "../../pages/Home/Home/Home"
import Review from "../../pages/Home/Testimonial/Review";
import Testimonial from "../../pages/Home/Testimonial/Testimolial";
import Login from "../../pages/Login/Login";


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