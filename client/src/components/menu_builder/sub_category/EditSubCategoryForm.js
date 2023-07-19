import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Dialog, DialogContent, DialogContentText, TextField } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";


function EditSubCategoryForm({ id, title, description, image, price, updateSubCategoryForm, handleDelete, handleFormClose, showForm }) {
	const [newTitle, setNewTitle] = useState(title);
	const [newDescription, setNewDescription] = useState(description);
	const [newImage, setNewImage] = useState(image);
	const [newPrice, setNewPrice] = useState(price)

	const handleTitleChange = (e) => {
		setNewTitle(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setNewDescription(e.target.value);
	};

	const handleImgURLChange = (e) => {
		setNewImage(e.target.value);
	};

	const handlePriceChange = (e) => {
		setNewPrice(e.target.value);
	};

	const handleSubmit = (e) => {
		handleFormClose();
		e.preventDefault();
		updateSubCategoryForm(id, newTitle, newDescription, newPrice, newImage);
		console.log(`id = ${id}`);
	};

	return (
		<>
			<Dialog
				open={showForm}
				onClose={handleFormClose}
				sx={{ maxWidth: "100%", maxHeight: "100%" }}
			>
				<DialogTitle variant="h3" color="primary.dark" alignSelf="center">Edit Product</DialogTitle>
				<DialogContent sx={{ width: { xs: "60vw", lg: "20vw", } }}>
					<Box
						sx={{ mb: "3vh", display: "flex", justifyContent: "start", flexDirection: "column", alignItems: "center" }}
						controlId="formTitle"
					>
						<DialogContentText sx={{ my: "auto", fontWeight: "bold", pt: "2vh" }}>
							Title
						</DialogContentText>
						<TextField
							onChange={handleTitleChange}
							variant="outlined"
							value={newTitle}
							type="title"
							Label="title"
							placeholder="title"
							sx={{ width: { xs: "60vw", md: "30vw", lg: "10vw" } }}
						/>

						<DialogContentText sx={{ my: "auto", fontWeight: "bold", pt: "2vh" }}>
							Description
						</DialogContentText>
						<TextField
							onChange={handleDescriptionChange}
							variant="outlined"
							value={newDescription}
							type="text"
							placeholder="description"
							sx={{ width: { xs: "60vw", md: "30vw", lg: "10vw" } }} />

						<DialogContentText sx={{ my: "auto", fontWeight: "bold", pt: "2vh" }}>
							Price
						</DialogContentText>
						<TextField
							onChange={handlePriceChange}
							value={newPrice}
							type="text"
							placeholder="'10'"
							sx={{ width: { xs: "60vw", md: "30vw", lg: "10vw" } }} />

						<DialogContentText sx={{ my: "auto", fontWeight: "bold", pt: "2vh" }}>
							Img URL
						</DialogContentText>
						<TextField
							onChange={handleImgURLChange}
							value={newImage}
							type="url"
							placeholder="ImgURL"
							sx={{ width: { xs: "60vw", md: "30vw", lg: "10vw" } }} />
					</Box>
				</DialogContent>

				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Button variant="outlined" sx={{ mb: "2vh", mt: "2vh", width: { xs: "50vw", md: "40vw", lg: "8vw" } }}
						onClick={handleFormClose}>
						Close
					</Button>
					<Button
						form="editModal"
						variant="outlined"
						sx={{ mb: "2vh", mt: { lg: "2vh" }, width: { xs: "50vw", md: "40vw", lg: "8vw" } }}
						onClick={handleSubmit}
					>
						Update
					</Button>
					<Button
						form="Modal"
						variant="contained"
						onClick={handleDelete}
						sx={{ mb: "2vh", mt: "2vh", width: { xs: "50vw", md: "40vw", lg: "8vw" } }}
					>
						Delete
					</Button>
				</Box>
			</Dialog >
		</>
	);
}
export default EditSubCategoryForm;