import React, { useState } from "react";
import EditRestaurantForm from "./EditRestaurantForm";
import { Typography } from "@mui/material";

function RestaurantCards({ id, resName, updateRestaurants, handleDelete }) {
	const [showEditModal, setShowEditModal] = useState(false);

	const handleShow = () => setShowEditModal(true);
	const handleClose = () => setShowEditModal(false);

	return (
		<div className="my-auto">
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
		</div>
	);
}

export default RestaurantCards;
