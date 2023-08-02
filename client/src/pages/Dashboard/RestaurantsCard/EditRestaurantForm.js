import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Dialog, DialogContent, TextField, DialogContentText } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";


function EditRestaurantForm({
	id,
	resName,
	show,
	closeForm,
	updateRestaurants,
	handleDelete,
	resImage
}) {
	const [name, setName] = useState(resName);
	const [image, setImage] = useState(resImage);

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
				<DialogContent >
					<Box>
						<DialogContentText sx={{ my: "auto", fontWeight: "bold", pt: "2vh", mr: "2vw" }}>
							{name}
						</DialogContentText>
						<TextField
							value={name}
							onChange={(e) =>
								setName(e.target.value)
							}
							label="title"
							sx={{ width: { xs: "60vw", md: "30vw", lg: "10vw" }, pb: "2vh", pr: "2vw" }}
						/>
						<DialogContentText sx={{ my: "auto", fontWeight: "bold", pt: "2vh", mr: "2vw" }}>
							{image}
						</DialogContentText>
						<TextField
							value={image}
							onChange={(e) =>
								setImage(e.target.value)
							}
							label="Image URL"
							sx={{ width: { xs: "60vw", md: "30vw", lg: "10vw" }, pb: "2vh", pr: "2vw" }}
						/>
					</Box>
				</DialogContent>
				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Button
						form="Modal"
						variant="contained"
						onClick={deleteRestaurant}
						sx={{ mb: "2vh", mt: "2vh", width: { xs: "50vw", md: "40vw", lg: "8vw" } }}
					>
						Delete
					</Button>
					<Button
						variant="contained"
						form="editModal"
						type="submit"
						onClick={handleSubmit}
						sx={{ mb: "2vh", mt: "2vh", width: { xs: "50vw", md: "40vw", lg: "8vw" } }}
					>
						Update
					</Button>
					<Button
						variant="outlined"
						onClick={closeForm}
						sx={{ mb: "2vh", mt: "2vh", width: { xs: "50vw", md: "40vw", lg: "8vw" } }}
					>
						Close
					</Button>
				</Box>
			</Dialog>
		</>
	);
}

export default EditRestaurantForm;
