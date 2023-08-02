import React, { useState } from "react";
import EditRestaurantForm from "./EditRestaurantForm";
import { Box, Card, Typography } from "@mui/material";

function RestaurantCards({ id, resName, resImage, updateRestaurants, handleDelete }) {
	const [showEditModal, setShowEditModal] = useState(false);

	const handleShow = () => setShowEditModal(true);
	const handleClose = () => setShowEditModal(false);

	return (
		<Card sx={{ mt: '3vh' }} >
			<img src={resImage} alt="test" style={{ width: '100%', height: 'auto' }} loading="lazy" />
			<Typography
				onClick={handleShow}
				sx={{ cursor: "pointer", fontWeight: "bold", px: { lg: 3 }, py: 1, m: 2 }}
			>
				{resName}
			</Typography>
			<EditRestaurantForm
				id={id}
				resName={resName}
				resImage={resImage}
				show={showEditModal}
				closeForm={handleClose}
				updateRestaurants={updateRestaurants}
				handleDelete={handleDelete}
			/>
		</Card>
	);
}

export default RestaurantCards;
