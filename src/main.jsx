
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './routes/routes';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './provider/AuthProvider';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
      <Toaster></Toaster>
     
    </AuthProvider>

  </React.StrictMode>
);