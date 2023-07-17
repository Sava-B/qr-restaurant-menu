import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Dialog, DialogContent, DialogContentText, TextField } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";


function EditSubCategoryForm(props) {
	const [title, setTitle] = useState(props.title);
	const [description, setDescription] = useState(props.description);
	const [image, setImgURL] = useState(props.image);
	const [price, setPrice] = useState(props.price)

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
				<DialogTitle variant="h3" color="primary.dark" alignSelf="center">Edit Product</DialogTitle>
				<DialogContent sx={{ width: '20vw', }}>
					<Box
						sx={{ mb: '3vh', display: 'flex', justifyContent: "start", flexDirection: "column", alignItems: 'center' }}
						controlId="formTitle"
					>
						<DialogContentText sx={{ my: 'auto', fontWeight: 'bold', pt: '2vh' }}>
							Title
						</DialogContentText>
						<TextField
							onChange={handleTitleChange}
							variant="outlined"
							value={title}
							type="title"
							Label="title"
							placeholder="title"
							sx={{ width: '10vw' }}
						/>

						<DialogContentText sx={{ my: 'auto', fontWeight: 'bold', pt: '2vh' }}>
							Description
						</DialogContentText>
						<TextField
							onChange={handleDescriptionChange}
							variant="outlined"
							value={description}
							type="text"
							placeholder="description"
							sx={{ width: '10vw' }} />

						<DialogContentText sx={{ my: 'auto', fontWeight: 'bold', pt: '2vh' }}>
							Price
						</DialogContentText>
						<TextField
							onChange={handlePriceChange}
							value={price}
							type="text"
							placeholder="'10'"
							sx={{ width: '10vw' }} />

						<DialogContentText sx={{ my: 'auto', fontWeight: 'bold', pt: '2vh' }}>
							Img URL
						</DialogContentText>
						<TextField
							onChange={handleImgURLChange}
							value={image}
							type="url"
							placeholder="ImgURL"
							sx={{ width: '10vw' }} />
					</Box>
				</DialogContent>

				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Button variant="outlined" sx={{ mb: "2vh", mt: "2vh", width: "8vw" }}
						onClick={props.handleFormClose}>
						Close
					</Button>
					<Button
						form="editModal"
						variant="outlined"
						sx={{ mb: "2vh", mt: "2vh", width: "8vw" }}
						onClick={(e) => {
							props.handleFormClose();
							e.preventDefault();
							props.updateSubCategoryForm(props.title, props.description, props.price, props.image);
							console.log(`Props.id = ${props.id}`);

						}}
					>
						Update
					</Button>
				</Box>
			</Dialog >
		</>
	);
}
export default EditSubCategoryForm;