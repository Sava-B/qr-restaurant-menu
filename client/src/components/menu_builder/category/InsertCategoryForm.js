import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Dialog, DialogContent, TextField, DialogContentText } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";

function InsertCategory(props) {
	const [title, setTitle] = useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		props.onSubmit(title);
	};

	return (
		<>
			<Dialog
				open={props.showForm}
				onClose={props.handleFormClose}
			>
				<DialogTitle variant="h3" color="primary.dark" alignSelf="center" sx={{ pb: "5vh" }}>Add New</DialogTitle>
				<DialogContent id="editModal">
					<Box
						sx={{ mb: "3vh", display: "flex", justifyContent: "start" }}
						controlId="formTitle"
					>
						<DialogContentText sx={{ my: "auto", fontWeight: "bold", pt: "2vh", mr: "2vw" }}>
							Title
						</DialogContentText>
						<TextField
							onChange={handleTitleChange}
							value={title}
							label="title"
							sx={{ width: { xs: "60vw", md: "30vw", lg: "10vw" }, pb: "2vh", pr: "2vw" }}
						/>
					</Box>
				</DialogContent>
				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Button
						variant="contained"
						onClick={(e) => {
							props.handleFormClose();
							e.preventDefault();
							props.handleInsertNewCategory(props.id, title);
						}}
						type="submit"

						sx={{ mb: "2vh", mt: "2vh", width: { xs: "50vw", md: "40vw", lg: "8vw" } }}
					>
						Insert
					</Button>

					<Button variant="outlined" onClick={props.handleFormClose} sx={{ mb: "3vh", mt: { lg: "2vh" }, width: { xs: "50vw", md: "40vw", lg: "18vw" } }} >
						Close
					</Button>


				</Box>
			</Dialog>
		</>
	);
}

export default InsertCategory;