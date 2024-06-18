import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/About/AboutUs";
import Projects from "../Pages/Projects/Projects";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Faq from "../Pages/Faq/Faq";
import ErrorPage from "../Pages/Error/ErrorPage";

export const Routes = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage/> , 
        children:[
       {path:'/' , element:<Home/>}  ,
       {path:'/ContactUs' , element:<Contact/>}  ,
       {path:'/AboutUs' , element:<AboutUs/>}  ,
       {path:'/Projects' , element:<Projects/>},  
       {path:'/Faq' , element:<Faq/>}  ,

       {path:'/signIn' , element:<SignIn/>} , 
       {path:'/signUp' , element:<SignUp/>} , 
      ]
      },
    ]);

