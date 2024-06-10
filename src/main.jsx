import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import { Routes } from './Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={Routes}>
    </RouterProvider>
      <Toaster position='bottom-center'/>
  </React.StrictMode>,
)
