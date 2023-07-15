import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import InsertSubCategory from "./InsertSubCategory";

function AddSubCategoryCard(props) {
    const [showForm, setShowForm] = useState(false);

    const handleFormClose = () => setShowForm(false);
    const handleFormShow = () => setShowForm(true);

    return (
        <div style={{ width: '10vw', height: '25svh' }}>
            <Card sx={{ display: 'flex', alignItems: 'stretch', height: '100%', flexDirection: 'column' }} onClick={handleFormShow}>
                <CardMedia
                    variant="top"
                    component="img"
                    height="60%"
                    image="https://static.vecteezy.com/system/resources/thumbnails/001/500/603/small/add-icon-free-vector.jpg"
                    alt="Card image" />
                <CardContent sx={{ p: 0, ml: 2 }}>
                    <Typography variant="h3" >Add New</Typography>
                </CardContent>
            </Card>

            <InsertSubCategory
                showForm={showForm}
                handleFormClose={handleFormClose}
                handleInsertNewSubCategory={props.handleInsertNewSubCategory}
            />
        </div >
    );
}

export default AddSubCategoryCard