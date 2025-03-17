import { createBrowserRouter, Navigate } from "react-router";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import DonationCampaign from "../pages/DonationCampaign";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";
import MoreNews from "../components/MoreNews";
import MoreVideos from "../components/MoreVideos";
import Campaigns from "../components/Campaigns";
import Details from "../pages/Details";



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
    path: "/donation-campaign",
    element: <DonationCampaign />,
    children: [
      {
        path: "/donation-campaign",
      element: <Navigate to ={"/donation-campaign/status/Running"}></Navigate>

      },
     
     
      {
        path: "/donation-campaign/status/:status",
        element: <Campaigns />,
        loader: async ({ params }) => {
          const res = await fetch("/JsonData.json");
          const data = await res.json();
          const status = data.filter(d => d.status == params.status);
          
          console.log(status); // This will log the result in the console
          return status; // Ensure to return the fetched data
        }
      },
      {
        path: "/donation-campaign/details/:id",
        element: <Details></Details>,
        loader: async ( {params}) => {
          const res = await fetch("/JsonData.json");
          const data = await res.json();

          const campaign = data.find(d => d.id == params.id);
          return campaign;
        }

      },
      
    ],
  },

  {
    path: "/how-help",
    element: <HowToHelp></HowToHelp>,
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/news",
    element: <MoreNews></MoreNews>
  }, 

  {
    path: "/videos",
    element: <MoreVideos></MoreVideos>
  },




]);

export default router;