import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/About/AboutUs";
import Projects from "../Pages/Projects/Projects";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const Routes = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children:[
       {path:'/' , element:<Home/>}  ,
       {path:'/ContactUs' , element:<Contact/>}  ,
       {path:'/AboutUs' , element:<AboutUs/>}  ,
       {path:'/Projects' , element:<Projects/>},  
       {path:'/Faq' , element:''}  ,

       {path:'/signIn' , element:<SignIn/>} , 
       {path:'/signUp' , element:<SignUp/>} , 


      ]
      },
    ]);

