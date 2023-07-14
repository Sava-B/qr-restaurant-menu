import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Dialog, TextField } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";


function EditRestaurantForm({
	id,
	resName,
	show,
	closeForm,
	updateRestaurants,
	handleDelete,
}) {
	const [name, setName] = useState(resName);

	const handleSubmit = (e) => {
		e.preventDefault();
		updateRestaurants(id, name);
		closeForm();
	};

	const deleteRestaurant = () => {
		handleDelete(id);
	};

	return (
		<>
			<Dialog
				open={show}
				onClose={closeForm}
				sx={{ maxWidth: "100vw", maxHeight: "100vh" }}
			>
				<DialogTitle variant="h3" color="primary.dark" alignSelf="center">Edit Restaurant</DialogTitle>
				<form id="editModal" >
					<Box>
						<label style={{ margin: "1vw", fontWeight: "bold", paddingRight: "4vw", marginLeft: "3vw" }}>
							{name}
						</label>
						<TextField
							value={name}
							onChange={(e) =>
								setName(e.target.value)
							}
							label="title"
							sx={{ width: "15vw", pb: "2vh", pr: "2vw", ml: "3vw" }}
						/>
					</Box>
				</form>
				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Button
						form="Modal"
						variant="contained"
						onClick={deleteRestaurant}
						sx={{ mt: "2vh", width: "18vw" }}
					>
						Delete
					</Button>
					<Button
						variant="contained"
						form="editModal"
						type="submit"
						onClick={handleSubmit}
						sx={{ mb: "2vh", mt: "1vh", width: "18vw" }}
					>
						Update
					</Button>
					<Button variant="outlined" onClick={closeForm} sx={{ mb: "3vh", width: "18vw" }}>
						Close
					</Button>
				</Box>
			</Dialog>
		</>
	);
}

export default EditRestaurantForm;
