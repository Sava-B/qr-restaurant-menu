import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Dialog, TextField } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";


function InsertRestaurant({ show, closeForm, returnRestauraunts }) {
	const [title, setTitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		returnRestauraunts(title);
		closeForm();
	};

	return (
		<>
			<Dialog
				open={show}
				onClose={closeForm}
				sx={{ maxWidth: "100%", maxHeight: "100%" }}
			>
				<DialogTitle variant="h3" color="primary.dark" alignSelf="center">Add New</DialogTitle>
				<form id="editModal">
					<Box>
						<label style={{ margin: "1vw", fontWeight: "bold", paddingRight: "4vw" }}>
							Title
						</label>
						<TextField
							value={title}
							onChange={(e) =>
								setTitle(e.target.value)
							}
							label="title"
							sx={{ width: "15vw", pb: "2vh", pr: "2vw" }}
						/>
					</Box>
				</form>
				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Button
						variant="contained"
						onClick={handleSubmit}
						type="submit"

						sx={{ mb: "2vh", mt: "2vh", width: "18vw" }}
					>
						Insert
					</Button>
					<Button variant="outlined" onClick={closeForm} sx={{ mb: "3vh", width: "18vw" }} >
						Close
					</Button>
				</Box>
			</Dialog>
		</>
	);
}

export default InsertRestaurant;
