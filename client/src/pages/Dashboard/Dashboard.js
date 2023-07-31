import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { BarChart } from "../../components/Charts/BarChart";
import { LineChart } from "../../components/Charts/LineChart";
import "chart.js/auto";
import Container from "@mui/material/Container";
import { useAuth0 } from "@auth0/auth0-react";
import {
	getRestaurantbyId,
	getRestaurants,
	getRevenuebyId,
	getClicksbyId,
	getOrdersbyId,
} from "../../lib/axios/API";

import { IoIosAddCircleOutline } from "react-icons/io";

import ViewRestaurants from "./RestaurantsCard/RestaurantsView";
import AddRestaurantCard from "./RestaurantsCard/AddRestaurant";
import { Box } from "@mui/material";

// Use axios to fetch the statistics from server;
// instead of using the array from dashboardstats.js

const Dashboard = () => {
	const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();

	const [restaurants, setRestaurants] = useState([]);
	const [menusLeft, setMenusLeft] = useState(50);
	const [RevenueStats, setRevenueStats] = useState([]);
	const [OrderStats, setOrderStats] = useState([]);
	const [ClickStats, setClickStats] = useState([]);

	const restaurantId = "646eb3a8b30795e61bc2a0de";


	// TODO: Bring functionality to making restaurants editable
	if (restaurants.length >= 100) {
		return restaurants.map((restaurant) => {
			<p style={{ margin: "100px" }}> {restaurant.name}</p>;
		});
	} else {
		return (
			<Container
				sx={{
					bgcolor: "primary.grey",
					width: "100vw",
					height: "100vh",
				}}
			>
				<Typography
					variant={"h2"}
					align="center"
					color="primary.white"
					gutterBottom
					sx={{ pt: "15vh", pb: "5vh", ml: "-4vw" }}
					fontWeight={"bold"}
				>
					{user.name}'s Restaurants
				</Typography>

				<Paper
					elevation={20}
					sx={{
						height: { xs: "60vh", md: "50vh", lg: "45vh" },
						width: "auto",
						display: "flex",
						flexDirection: "column",
						pl: "1vw",
						pr: "1vw",
						ml: "-7.5vw",
						bgcolor: "primary.verydark",
						mb: "100px",
						alignItems: "center",
					}}
				>
					<ViewRestaurants />

					<Typography
						variant="h3"
						align="center"
						sx={{ mb: "10vh" }}
					>
						YOUR RESTAURANTS
					</Typography>
				</Paper>



			</Container>
		);
	}
};

export default Dashboard;
