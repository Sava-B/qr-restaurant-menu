import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Dialog, DialogContent, TextField, DialogContentText } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";


function EditCategoryForm(props) {
  const [title, setTitle] = useState(props.title);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <Dialog
        open={props.show}
        onClose={props.handleClose}
      >
        <DialogTitle variant="h3" color="primary.dark" alignSelf="center">Edit Category</DialogTitle>
        <DialogContent id="editModal">
          <Box
            sx={{ mb: '3vh', display: 'flex', justifyContent: "start" }}
            controlId="formTitle"
          >
            <DialogContentText sx={{ my: 'auto', fontWeight: 'bold', pt: '2vh', mr: '2vw' }}>
              Title
            </DialogContentText>
            <TextField
              onChange={handleTitleChange}
              value={title}
              label="title"
              sx={{ width: { xs: '60vw', md: '30vw', lg: '10vw' }, pb: "2vh", pr: "2vw" }}
            />
          </Box>
        </DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Button
            variant="outlined"
            onClick={() => {
              props.handleDelete(props.id);
            }}
            sx={{ mb: "2vh", mt: "2vh", width: { xs: '50vw', md: '40vw', lg: "8vw" } }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            onClick={(e) => {
              props.handleClose();
              e.preventDefault();
              props.updateCategoryForm(props.id, title);
            }}
            sx={{ mb: "2vh", mt: "2vh", width: { xs: '50vw', md: '40vw', lg: "8vw" } }}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            onClick={props.handleClose}
            sx={{ mb: "2vh", mt: "2vh", width: { xs: '50vw', md: '40vw', lg: "8vw" } }}
          >
            Close
          </Button>
        </Box>
      </Dialog >
    </>
  );
}

export default EditCategoryForm;