import { useState } from "react";
import InsertRestaurant from "./InsertRestaurantForm";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Box } from "@mui/material";

function AddRestaurantCard({ returnRestauraunts }) {
	const [showAddForm, setShowAddForm] = useState(false);

	const showForm = () => setShowAddForm(true);
	const closeForm = () => setShowAddForm(false);

	return (
		<Box sx={{ textAlign: "center" }}>
			<IoIosAddCircleOutline
				style={{
					fontSize: "3rem",
					color: "#FFFFFF",
				}}
				onClick={showForm}
			/>
			<InsertRestaurant
				closeForm={closeForm}
				show={showAddForm}
				returnRestauraunts={returnRestauraunts}
			/>
		</Box>
	);
}

export default AddRestaurantCard;
