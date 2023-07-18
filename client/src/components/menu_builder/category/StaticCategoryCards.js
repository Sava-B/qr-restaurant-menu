import React from "react";
import { Box, Typography } from "@mui/material";


function StaticCategoryCards(props) {
	return (
		<>
			<Box sx={{ my: "auto" }}>
				<Typography
					variant="h4"
					sx={{
						fontWeight: "bold", px: "1vw", py: "1vh", mx: "1vw", color: "primary.verydark",
						border: 2, borderRadius: "16px", borderColor: "grey.500"
					}}
				>
					{props.title}
				</Typography>
			</Box>
		</>
	);
}

export default StaticCategoryCards;
