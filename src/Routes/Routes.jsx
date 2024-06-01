import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";

export const Routes = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children:[
       {path:'/' , element:<Home></Home>}  ,
       {path:'/contact' , element:<Contact/>}  


      ]
      },
    ]);

