import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
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

				<DialogContent>
					<DialogContentText sx={{ my: 'auto', fontWeight: 'bold' }}>
						Title
					</DialogContentText>
					<TextField
						onChange={handleTitleChange}
						variant="outlined"
						value={title}
						type="title"
						Label="title"
						className=" form-control w-75"
					/>

					<Form.Label className=" text-start text-nowrap text-secondary col-2 my-auto fw-bold  me-3">
						Description
					</Form.Label>
					<Form.Control
						onChange={handleDescriptionChange}
						value={description}
						type="text"
						placeholder="description"
						className=" form-control w-75"
					/>

					<Form.Label className=" text-start text-nowrap text-secondary col-2 my-auto fw-bold  me-3">
						Price
					</Form.Label>
					<Form.Control
						onChange={handlePriceChange}
						value={price}
						type="url"
						placeholder="'10'"
						className=" form-control w-75"
					/>

					<Form.Label className=" text-start text-nowrap text-secondary col-2 my-auto fw-bold  me-3">
						Img URL
					</Form.Label>
					<Form.Control
						onChange={handleImgURLChange}
						value={ImgURL}
						type="url"
						placeholder="ImgURL"
						className=" form-control w-75"
					/>

				</DialogContent>

				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Button variant="secondary" onClick={props.handleFormClose}>
						Close
					</Button>

					<Button
						form="editModal"
						className=" btn btn-primary"
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