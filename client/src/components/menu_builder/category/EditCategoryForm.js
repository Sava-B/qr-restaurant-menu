import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Dialog, TextField } from "@mui/material";
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
        <Box sx={{ display: "flex", flexDirection: 'row' }} >
          <Button
            className="btn btn-danger"
            onClick={() => {
              props.handleDelete(props.id);
            }}
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
            sx={{ mb: "2vh", mt: "2vh", width: "18vw" }}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            onClick={props.handleClose}
          >
            Close
          </Button>
        </Box>
      </Dialog >
    </>
  );
}

export default EditCategoryForm;