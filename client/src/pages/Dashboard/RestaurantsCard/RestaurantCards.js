import React, { useState } from "react";
import EditRestaurantForm from "./EditRestaurantForm";
import { Box, Card, Typography } from "@mui/material";
import { FiXCircle, FiEdit } from "react-icons/fi"
import { Link } from "react-router-dom";


function RestaurantCards({ id, resName, resImage, updateRestaurants, handleDelete }) {
	const [showEditModal, setShowEditModal] = useState(false);

	const handleShow = () => setShowEditModal(true);
	const handleClose = () => setShowEditModal(false);

	const handleEditMenu = () => {

	}

	return (
		<Card sx={{ mt: '3vh' }} >
			<img src={resImage} alt="test" style={{ width: '100%', height: 'auto' }} loading="lazy" />
			<Typography
				onClick={handleShow}
				sx={{ cursor: "pointer", fontWeight: "bold", px: { lg: 3 }, py: 1, m: 2 }}
			>
				{resName}
			</Typography>
			<FiXCircle style={{ paddingRight: '3vw', marginLeft: '1rem', fontSize: '30' }} onClick={handleDelete} />
			<Link to={'../menu_builder'}>
				<FiEdit onClick={handleEditMenu} style={{ paddingRight: '3vw', marginLeft: '1rem', fontSize: '30' }} />
			</Link>
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
