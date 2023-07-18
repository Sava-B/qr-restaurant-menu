import React, { useState } from "react";
import { Box, Dialog, DialogContent, DialogContentText, TextField } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";


function InsertSubCategory(props) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [ImgURL, setImgURL] = useState("");
	const [price, setPrice] = useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const handleImgURLChange = (e) => {
		setImgURL(e.target.value);
	};

	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};

	return (
		<>
			<Dialog
				open={props.showForm}
				onClose={props.handleFormClose}
				sx={{ maxWidth: "100%", maxHeight: "100%" }}
			>
				<DialogTitle variant="h3" color="primary.dark" alignSelf="center">Add New Product</DialogTitle>
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
							value={title}
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
							value={description}
							type="text"
							placeholder="description"
							sx={{ width: { xs: "60vw", md: "30vw", lg: "10vw" } }} />

						<DialogContentText sx={{ my: "auto", fontWeight: "bold", pt: "2vh" }}>
							Price
						</DialogContentText>
						<TextField
							onChange={handlePriceChange}
							value={price}
							type="text"
							placeholder=""10""
							sx={{ width: { xs: "60vw", md: "30vw", lg: "10vw" } }} />

						<DialogContentText sx={{ my: "auto", fontWeight: "bold", pt: "2vh" }}>
							Img URL
						</DialogContentText>
						<TextField
							onChange={handleImgURLChange}
							value={ImgURL}
							type="url"
							placeholder="ImgURL"
							sx={{ width: { xs: "60vw", md: "30vw", lg: "10vw" }, pb: "15vh" }} />
					</Box>
				</DialogContent>
				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Button variant="outlined" sx={{ mb: "2vh", mt: "2vh", width: { xs: "50vw", md: "40vw", lg: "8vw" } }}
						onClick={props.handleFormClose}>
						Close
					</Button>

					<Button
						form="editModal"
						variant="outlined"
						sx={{ mb: "2vh", mt: { lg: "2vh" }, width: { xs: "50vw", md: "40vw", lg: "8vw" } }}
						onClick={(e) => {
							e.preventDefault();
							props.handleFormClose();
							props.handleInsertNewSubCategory(title, description, price, ImgURL);

						}}
					>
						Update
					</Button>
				</Box>
			</Dialog >
		</>
	);
}

export default InsertSubCategory;