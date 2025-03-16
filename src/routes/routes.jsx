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
        element: <Navigate to="status/Running" />,
      },
      {
        path: "/donation-campaign/status/:status",
        element: <Campaigns></Campaigns>,
       loader: () => fetch('/JsonData.json')
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