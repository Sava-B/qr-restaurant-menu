import React from "react";
import "../assets/index.css";
import reportWebVitals from "../reportWebVitals";
import { createBrowserRouter } from "react-router-dom";


import Root from "../components/root";
import ErrorPage from "../pages/ErrorPage/error-page";
import Home from "../pages/Home/Home";
import Pricing from "../pages/Pricing/Pricing";
import SupportPage from "../pages/Support/Support";
import FreeTrialPage from "../pages/FreeTrial/FreeTrial";
import MenuBuilder from "../components/menu_builder/MenuBuilder";
import Dashboard from "../pages/Dashboard/Dashboard";
import QRCodePage from "../pages/QR/qr";
import StaticMenuPage from "../pages/StaticMenu/StaticMenu";
import { AuthGuard } from "../lib";

export const router = createBrowserRouter([
    {
        path: "/menu_builder",
        element: <MenuBuilder />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/Pricing",
                element: <Pricing />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/Support",
                element: <SupportPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/Free Trial",
                element: <FreeTrialPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/Dashboard",
                element: <AuthGuard component={Dashboard} />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/QR",
                element: <QRCodePage />,
                errorElement: <ErrorPage />,
            },
        ],
    },
    {
        path: "/static",
        element: <StaticMenuPage />,
    },
]);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

