import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { motion } from "framer-motion";

import { Support } from "@mui/icons-material";
import ErrorPage from "../error-page";
import { Outlet, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Box, Button, Paper } from "@mui/material";
import { AppButton } from "../components/AppButton";
import axios from "axios";

import StaticCategoryCards from "../components/menu_builder/category/StaticCategoryCards";
import InsertCategory from "../components/menu_builder/category/InsertCategoryForm";
import Header from "../components/menu_builder/Header";
import InsertSubCategory from "../components/menu_builder/sub_category/InsertSubCategory";
import StaticSubCategoryCards from "../components/menu_builder/sub_category/StaticSubCategoryCards";
import {
	categoriesData,
	subCategoriesData,
} from "../components/menu_builder/dummyData";

import {
	getItems
} from "../axios/API";


export default function StaticMenuPage() {
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
		<Box>
			<Header />
			<Box sx={{ mb: "5vh", mt: "3vh" }}>
				<Box sx={{ mt: "4vh", ml: "5vw" }}>
					<Typography variant="h2">Categories</Typography>
				</Box>

				<Box sx={{ display: "flex", px: "4vw", overflow: "auto", flex: "no-wrap", width: "100vw", py: "3vh" }}>
					{categoriesData.map((category) => {
						return (
							<StaticCategoryCards
								key={category.id}
								id={category.id}
								title={category.title}
							/>
						);
					})}
				</Box>

				<Box sx={{ my: "4vh", ml: "5vw" }}>
					<Typography variant="h2">Menu</Typography>
				</Box>

				<Box sx={{ display: "flex", px: "4vw", overflow: "auto", flex: "no-wrap", width: "100vw", py: "3vh" }}>
					{data.map((dataObj) => {
						return (
							<StaticSubCategoryCards
								key={dataObj.id}
								id={dataObj.id}
								title={dataObj.name}
								description={dataObj.desc}
								image={dataObj.image}
								price={dataObj.price}
							/>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
}