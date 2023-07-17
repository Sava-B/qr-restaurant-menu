import React, { useState } from "react";

import EditSubCategoryForm from "./EditSubCategoryForm";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function SubCategoryCard(props) {
	const [showForm, setShowForm] = useState(false);

	const handleFormClose = () => setShowForm(false);
	const handleFormShow = () => setShowForm(true);

	return (
		<div>
			<Card sx={{ display: 'flex', alignItems: 'stretch', height: '100%', flexDirection: 'column' }} onClick={handleFormShow}>
				<CardMedia variant="top"
					component="img"
					height="60%"
					image={props.image}
					alt="Card image" />
				<CardContent sx={{ p: 0, ml: 2 }}>
					<Typography variant="h2" sx={{ color: 'primary.verydark' }} >
						{props.title}
					</Typography>

					<Typography variant="h4" sx={{ color: 'primary.main' }}>
						{props.price}
					</Typography>
					<Typography variant="h6" sx={{ color: 'primary.verydark', pt: '2vh' }}>
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