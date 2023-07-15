import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Dialog, TextField } from "@mui/material";
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
				<DialogTitle variant="h3" color="primary.dark" alignSelf="center">Add New</DialogTitle>
				<form id="editModal">
					<Box
						sx={{ mb: '3vh', display: 'flex', justifyContent: "start" }}
						controlId="formTitle"
					>
						<label style={{ margin: "1vw", fontWeight: "bold", paddingRight: "4vw" }}>
							Title
						</label>
						<TextField
							onChange={handleTitleChange}
							value={title}
							label="title"
							sx={{ width: "15vw", pb: "2vh", pr: "2vw" }}
						/>
					</Box>
				</form>
				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Button
						variant="contained"
						onClick={(e) => {
							props.handleFormClose();
							e.preventDefault();
							props.handleInsertNewCategory(props.id, title);
						}}
						type="submit"

						sx={{ mb: "2vh", mt: "2vh", width: "18vw" }}
					>
						Insert
					</Button>

					<Button variant="outlined" onClick={props.handleFormClose} sx={{ mb: "3vh", width: "18vw" }} >
						Close
					</Button>


				</Box>
			</Dialog>
		</>
	);
}

export default InsertCategory;