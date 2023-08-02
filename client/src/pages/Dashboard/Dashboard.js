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
import ViewRestaurants from "./RestaurantsCard/RestaurantsView";

const Dashboard = () => {
	const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();

	const [restaurants, setRestaurants] = useState([]);

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
					width: { xs: '100%', lg: "100%" },
					height: { xs: '100%', lg: "100%", xl: '100%' },
					pl: 0
				}}
			>
				<Typography
					variant={"h2"}
					align="center"
					color="primary.white"
					gutterBottom
					sx={{ pt: "15vh", pb: "5vh", ml: { xl: "-4vw" } }}
					fontWeight={"bold"}
				>
					{user.name}'s Restaurants
				</Typography>

				<Paper
					elevation={20}
					sx={{
						height: 'auto',
						width: "auto",
						display: "flex",
						flexDirection: "column",
						pl: "1vw",
						pr: "1vw",
						ml: { xs: '0', xl: "-7.5vw" },
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
						color='primary.main'
					>
						YOUR RESTAURANTS
					</Typography>
				</Paper>
			</Container>
		);
	}
};

export default Dashboard;
