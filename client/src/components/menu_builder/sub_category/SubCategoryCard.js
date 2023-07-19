import React, { useState } from "react";

import EditSubCategoryForm from "./EditSubCategoryForm";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function SubCategoryCard({ id, title, description, image, price, updateSubCategoryForm, handleDelete }) {
	const [showForm, setShowForm] = useState(false);

	const handleFormClose = () => setShowForm(false);
	const handleFormShow = () => setShowForm(true);

	return (
		<div>
			<Card sx={{ display: "flex", alignItems: "stretch", height: { xs: "50vh", lg: "25vh" }, width: { xs: "50vw", md: "20vw", lg: "10vw" }, flexDirection: "column" }} onClick={handleFormShow}>
				<CardMedia variant="top"
					component="img"
					height="30%"
					image={image}
					alt="Card image" />
				<CardContent sx={{ p: 0, ml: 2, whiteSpace: "pre-wrap" }}>
					<Typography variant="h5" sx={{ color: "primary.verydark", fontWeight: "bold" }} >
						{title}
					</Typography>

					<Typography variant="p" display="block" sx={{ color: "primary.main", fontWeight: "light", my: "1vh" }}>
						${price}

					</Typography>

					<Typography variant="p" sx={{ color: "primary.verydark", pt: "2vh", }}>
						{description}
					</Typography>

				</CardContent>
			</Card>

			<EditSubCategoryForm
				id={id}
				title={title}
				description={description}
				image={image}
				price={price}
				updateSubCategoryForm={updateSubCategoryForm}
				handleDelete={handleDelete}
				handleFormClose={handleFormClose}
				showForm={showForm}
			/>
		</div>
	);
}

export default SubCategoryCard;