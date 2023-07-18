import { useState } from 'react'
import InsertCategory from './InsertCategoryForm'
import { Box, Typography } from '@mui/material';

function AddCategoryCard(props) {
    const [showAddForm, setShowAddForm] = useState(false);

    const handleFormShow = () => setShowAddForm(true);
    const handleFormClose = () => setShowAddForm(false);

    return (
        <>
            <Box>
                <Typography
                    onClick={handleFormShow}
                    variant='h4'
                    sx={{
                        fontWeight: 'bold', px: '1vw', py: '1vh', mx: '3vw', color: 'primary.verydark',
                        border: 2, borderRadius: '16px', borderColor: 'grey.500', width: { xs: '30vw', md: '20vw', lg: '10vw', xl: '8vw' }
                    }}
                >
                    + Add New
                </Typography>
                <InsertCategory
                    handleFormClose={handleFormClose}
                    showForm={showAddForm}
                    handleInsertNewCategory={props.handleInsertNewCategory}
                />
            </Box>
        </>

    )

}

export default AddCategoryCard;