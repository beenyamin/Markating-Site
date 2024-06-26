import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import { Routes } from './Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/Auth/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Routes}>

        </RouterProvider>
        <Toaster position='bottom-center' />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
