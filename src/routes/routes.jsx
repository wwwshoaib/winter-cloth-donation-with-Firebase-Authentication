import { createBrowserRouter, Navigate } from "react-router";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import DonationCampaign from "../pages/DonationCampaign";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";
import MoreNews from "../components/MoreNews";
import MoreVideos from "../components/MoreVideos";
import Campaigns from "../components/Campaigns";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";





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
      {
        path: "/auth/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },

    ]
  },

  {
    path: "/donation-campaign",
    element: <DonationCampaign />,
    children: [
      {
        path: "/donation-campaign",
        element: <Navigate to={"/donation-campaign/status/Running"}></Navigate>

      },


      {
        path: "/donation-campaign/status/:status",
        element: <Campaigns />,
        loader: async ({ params }) => {
          const res = await fetch("/JsonData.json");
          const data = await res.json();
          const status = data.filter(d => d.status == params.status);
          return status;
        }
      },
      {
        path: "/donation-campaign/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: async ({ params }) => {
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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