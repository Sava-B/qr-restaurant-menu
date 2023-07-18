import React, { useState } from 'react'

import EditCategoryForm from './EditCategoryForm';
import { Box, Typography } from '@mui/material';

function CategoryCards(props) {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShow = () => setShowEditModal(true);
  const handleClose = () => setShowEditModal(false);

  return (
    <>
      <Box sx={{ my: 'auto' }}>
        <Typography
          onClick={handleShow}
          variant='h4'
          sx={{
            fontWeight: 'bold', px: '1vw', py: '1vh', mx: '1vw', color: 'primary.verydark',
            border: 2, borderRadius: '16px', borderColor: 'grey.500', width: { xs: '30vw', md: '20vw', lg: '8vw', xl: '6vw' }
          }}
        >
          {props.title}
        </Typography>
        <EditCategoryForm
          id={props.id}
          title={props.title}
          show={showEditModal}
          handleClose={handleClose}
          updateCategoryForm={props.updateCategoryForm}
          handleDelete={props.handleDelete}
        />
      </Box>
    </>
  )
}

export default CategoryCards