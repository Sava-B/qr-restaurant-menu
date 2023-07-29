import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Root from "./components/root";
import ErrorPage from "./pages/ErrorPage/error-page";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import SupportPage from "./pages/Support/Support";
import FreeTrialPage from "./pages/FreeTrial/FreeTrial";
import MenuBuilder from "./components/menu_builder/MenuBuilder";
import Dashboard from "./pages/Dashboard/Dashboard";
import QRCodePage from "./pages/QR/qr";
import StaticMenuPage from "./pages/StaticMenu/StaticMenu";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthGuard, Authenticate } from "./lib";
import { router } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Auth0Provider
		domain={process.env.REACT_APP_AUTH0_DOMAIN}
		clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
		authorizationParams={{
			redirect_uri: window.location.origin,
			audience: "https://dev-h1ejsb03jtcnof0i.us.auth0.com/api/v2/",
			scope: "openid profile email",
		}}
	>
		<Authenticate />
		<RouterProvider router={router} />
	</Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
