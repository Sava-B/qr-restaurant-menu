import React, { useState, useEffect } from "react";

import EditSubCategoryForm from "./EditSubCategoryForm";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import {
	getItems
} from "../../../lib/axios/API";


function StaticSubCategoryCards(props) {
	const [data, setData] = useState([])

	useEffect(() => {
		getItems()
			.then(function (response) {
				// handle success
				console.log("Here is the response data", response.data);
				const prices = response.data.map(({ price }) =>
					price
				)
				console.log("Prices: ", prices)
				setData(response.data)
				// console.log("data state.price: ", data[1].price)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}, [])

	return (
		<Card sx={{ display: "flex", alignItems: "stretch", height: "100%", flexDirection: "column" }} >
			<CardMedia variant="top"
				component="img"
				height="60%"
				image={props.image}
				alt="Card image" />
			<CardContent sx={{ p: 0, ml: 2 }}>
				<Typography variant="h2" sx={{ color: "primary.verydark" }} >
					{props.title}
				</Typography>

				<Typography variant="h4" sx={{ color: "primary.main" }}>
					{props.price}
				</Typography>
				<Typography variant="h6" sx={{ color: "primary.verydark", pt: "2vh" }}>
					{props.description}
				</Typography>

			</CardContent>
		</Card>
	);
}

export default StaticSubCategoryCards;