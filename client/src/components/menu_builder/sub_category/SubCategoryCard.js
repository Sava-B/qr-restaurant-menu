import React, { useState } from "react";

import EditSubCategoryForm from "./EditSubCategoryForm";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function SubCategoryCard(props) {
	const [showForm, setShowForm] = useState(false);

	const handleFormClose = () => setShowForm(false);
	const handleFormShow = () => setShowForm(true);

	return (
		<div>
			<Card sx={{ display: "flex", alignItems: "stretch", height: { xs: "50vh", lg: "25vh" }, width: { xs: "50vw", md: "20vw", lg: "10vw" }, flexDirection: "column" }} onClick={handleFormShow}>
				<CardMedia variant="top"
					component="img"
					height="30%"
					image={props.image}
					alt="Card image" />
				<CardContent sx={{ p: 0, ml: 2, whiteSpace: "pre-wrap" }}>
					<Typography variant="h5" sx={{ color: "primary.verydark", fontWeight: "bold" }} >
						{props.title}
					</Typography>

					<Typography variant="p" display="block" sx={{ color: "primary.main", fontWeight: "light", my: "1vh" }}>
						${props.price}

					</Typography>

					<Typography variant="p" sx={{ color: "primary.verydark", pt: "2vh", }}>
						{props.description}
					</Typography>

				</CardContent>
			</Card>

			<EditSubCategoryForm
				title={props.title}
				id={props.id}
				image={props.image}
				description={props.description}
				updateSubCategoryForm={props.updateSubCategoryForm}
				handleDelete={props.handleDelete}
				showForm={showForm}
				handleFormClose={handleFormClose}
			/>
		</div>
	);
}

export default SubCategoryCard;