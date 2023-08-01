import React, { useState } from "react";
import EditRestaurantForm from "./EditRestaurantForm";
import { Box, Card, Typography } from "@mui/material";

function RestaurantCards({ id, resName, updateRestaurants, handleDelete }) {
	const [showEditModal, setShowEditModal] = useState(false);

	const handleShow = () => setShowEditModal(true);
	const handleClose = () => setShowEditModal(false);

	return (
		<Card sx={{ mt: '3vh' }} >
			<Typography
				onClick={handleShow}
				sx={{ cursor: "pointer", fontWeight: "bold", px: 3, py: 1, m: 2, mt: 0 }}
			>
				{resName}
			</Typography>
			<EditRestaurantForm
				id={id}
				resName={resName}
				show={showEditModal}
				closeForm={handleClose}
				updateRestaurants={updateRestaurants}
				handleDelete={handleDelete}
			/>
		</Card>
	);
}

export default RestaurantCards;
