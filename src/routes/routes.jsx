import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import DonationCampaign from "../pages/DonationCampaign";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement: <ErrorPage></ErrorPage>,
     
    }, 
  
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: "/auth/login",
          element: <Login></Login>,
        },
        {
          path: "/auth/register",
          element: <Register></Register>,
        },
       
      ]
    }, 

    { 
        path:"donation-campaign",
        element: <DonationCampaign></DonationCampaign>,
    }, 

    { 
        path:"how-help",
        element: <HowToHelp></HowToHelp>,
    }, 

    { 
        path:"dashboard",
        element: <Dashboard></Dashboard>,
    }, 
   
   
   
  ]);
  
  export default router;