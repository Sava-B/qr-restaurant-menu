import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Dialog, DialogContent, TextField, DialogContentText } from "@mui/material";
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
				<DialogContent>
					<Box>
						<DialogContentText sx={{ my: "auto", fontWeight: "bold", pt: "2vh", mr: "2vw" }}>
							Title
						</DialogContentText>
						<TextField
							value={title}
							onChange={(e) =>
								setTitle(e.target.value)
							}
							label="title"
							sx={{ width: { xs: "60vw", md: "30vw", lg: "10vw" }, pb: "2vh", pr: "2vw" }}
						/>
					</Box>
				</DialogContent>
				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Button
						variant="contained"
						onClick={handleSubmit}
						type="submit"

						sx={{ mt: "2vh", width: { xs: "50vw", md: "40vw", lg: "8vw" } }}
					>
						Insert
					</Button>
					<Button variant="outlined" onClick={closeForm} sx={{ mb: "2vh", mt: "2vh", width: { xs: "50vw", md: "40vw", lg: "8vw" } }} >
						Close
					</Button>
				</Box>
			</Dialog>
		</>
	);
}

export default InsertRestaurant;
