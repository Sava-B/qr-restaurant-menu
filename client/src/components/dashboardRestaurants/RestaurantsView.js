import React, { useState, useEffect } from "react";
import AddRestaurantCard from "./AddRestaurant";
import RestaurantCards from "./RestaurantCards";
import { useAuth0 } from "@auth0/auth0-react";
import {
	getRestaurants,
	createRestaurants,
	updateRestaurants,
	deleteRestaurants,
} from "../../axios/API";
import { Box, Grid } from "@mui/material";

function ViewRestaurants() {
	const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
	const [restaurants, setRestaurants] = useState([]);

	const getAllRestaurants = async () => {
		try {
			const token = await getAccessTokenSilently();
			const response = await getRestaurants(token);
			if (response.status === 200) {
				const data = response.data;
				setRestaurants(data.restaurants);
			} else {
				return;
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (isAuthenticated) {
			getAllRestaurants();
		}
	}, [isAuthenticated]);

	const addRestaurants = async (name) => {
		const data = { name };

		try {
			const token = await getAccessTokenSilently();
			const response = await createRestaurants(data, token);
			if (response.status === 201) {
				const restaurant = response.data;

				setRestaurants([...restaurants, restaurant]);
			} else {
				return;
			}
		} catch (error) {
			console.error(error);
		}
	};

	const updateRestaurant = async (id, name) => {
		const data = { name };
		console.log(id);
		try {
			const token = await getAccessTokenSilently();
			const response = await updateRestaurants(id, data, token);
			if (response.status === 200) {
				const restaurant = response.data;

				const updateState = restaurants.map((res) => {
					console.log(res.id === restaurant.id);
					console.log(res.id, restaurant.id);
					if (res.id === restaurant.id) {
						res.name = restaurant.name;
					}
					return res;
				});
				setRestaurants(updateState);
			} else {
				return;
			}
		} catch (error) {
			console.error(error);
		}
	};
	console.log(restaurants);
	const handleDelete = async (id) => {
		try {
			const token = await getAccessTokenSilently();
			const response = await deleteRestaurants(id, token);
			if (response.status === 200) {
				const restaurant = response.data;
				const { id } = restaurant;
				const updatedRestaurants = restaurants.filter(
					(restaurant) => restaurant.id !== id
				);
				setRestaurants(updatedRestaurants);
			} else {
				return;
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Box container sx={{ padding: ".5rem" }}>
			<Grid container spacing={2}>
				{restaurants.map((restaurant) => {
					return (
						<Grid item xs={4} key={restaurant.id}>
							<RestaurantCards
								id={restaurant.id}
								resName={restaurant.name}
								updateRestaurants={updateRestaurant}
								handleDelete={() =>
									handleDelete(restaurant.id)
								}
							/>
						</Grid>
					);
				})}
				<Grid item xs>
					<AddRestaurantCard
						returnRestauraunts={addRestaurants}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}

export default ViewRestaurants;
