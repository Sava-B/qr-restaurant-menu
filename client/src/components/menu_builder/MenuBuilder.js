import React, { useState, useEffect } from "react";

import CategoryCards from "./category/CategoryCards";
import AddCategoryCard from "./category/AddCategoryCard"
import Header from "./Header";
import InsertSubCategory from "./sub_category/InsertSubCategory";
import SubCategoryCard from "./sub_category/SubCategoryCard";
import AddSubCategoryCard from "./sub_category/AddSubCategoryCard"
import { ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { categoriesData } from "./dummyData";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { theme } from "../root";
import {
  getItems,
  postItems
} from "../../lib/axios/API";


function MenuBuilder() {
  const [categories, setCategories] = useState(categoriesData);
  const [subCategories, setSubCategories] = useState([])
  const [oldSubCats, setOldSubCats] = useState([])

  useEffect(() => {
    getItems()
      .then(function (response) {
        // handle success
        console.log("Here is the response data", response.data);
        const prices = response.data.map(({ price }) =>
          price
        )
        console.log("Prices: ", prices)
        setOldSubCats(response.data)
        setSubCategories(response.data)
        // console.log("data state.price: ", data[1].price)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])

  const updateCategoryForm = (id, newTitle) => {
    const updatedCategories = categories.map((category) => {
      if (id === category.id) {
        return { ...category, title: newTitle };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const saveData = () => {
    // A comparer used to determine if two entries are equal.
    const isSameItem = (subCategories, oldSubCats) => subCategories.name === oldSubCats.name && subCategories.desc === oldSubCats.desc && subCategories.price === oldSubCats.price && subCategories.image === oldSubCats.image && subCategories.category === oldSubCats.category;

    // Get items that only occur in the left array,
    // using the compareFunction to determine equality.
    const onlyInLeft = (left, right, compareFunction) =>
      left.filter(leftValue =>
        !right.some(rightValue =>
          compareFunction(leftValue, rightValue)));

    const onlyInNew = onlyInLeft(subCategories, oldSubCats, isSameItem);

    const result = [...onlyInNew];

    console.log("This should save data (placeholder)", result[0].category)

    postItems({ category: "vegetarian", image: result[0].image, price: result[0].price, desc: result[0].desc, name: result[0].name })

    console.log("works? nah")
  }


  // If I remove the "id" from the props, the new category doesn"t have a title
  const handleInsertNewCategory = (id, newTitle) => {
    const newCategory = { id: categories.length + 1, title: newTitle };
    setCategories([...categories, newCategory]);
  };

  const handleDelete = (categoryId) => {
    console.log(categories);
    const newCategory = categories.filter((category) => {
      if (category.id === categoryId) {
        return false;
      } else {
        return true;
      }
    });
    setCategories(newCategory);
  };

  const updateSubCategoryForm = (newTitle, newDescription, newPrice, newImgURL) => {
    const updatedSubCategory = subCategories.map((subCategory) => {
      if (newTitle === subCategories.name) {
        console.log("updateSubCategoryForm");
        return {
          // ...subCategory,
          name: newTitle,
          desc: newDescription,
          price: newPrice,
          image: newImgURL,
        };
      }
      return subCategory;
    });
    setSubCategories(updatedSubCategory);
    console.log("subCategories after updating a subcategory: ", subCategories)
  };

  const handleInsertNewSubCategory = (newTitle, newDescription, newPrice, newImgURL) => {
    console.log("handleInsertNewSubCategory");
    const newSubCategory = {
      id: subCategories.length + 1,
      name: newTitle,
      desc: newDescription,
      price: newPrice,
      image: newImgURL,
    };
    console.log(newSubCategory);
    setSubCategories([...subCategories, newSubCategory]);
    console.log("subCategories after making a subcategory: ", subCategories)
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "100vh" }}>
        <Header />

        <Container sx={{ mb: "5vh", mt: "3vh", display: "flex", flexDirection: "column" }} >
          <Box sx={{ mt: "4vh", display: "flex" }}>
            <Typography variant="h2" sx={{ color: "primary.verydark", fontWeight: "normal", mb: "2vh" }}>Categories</Typography>
          </Box>

          <Box sx={{ display: "flex", px: "4vw", overflow: "auto", flex: "nowrap", width: "100vw", py: "3vh" }}>
            {categories.map((category) => {
              return (
                <CategoryCards
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  updateCategoryForm={updateCategoryForm}
                  handleDelete={handleDelete}
                />
              );
            })}
            <AddCategoryCard handleInsertNewCategory={handleInsertNewCategory} />
          </Box>

          <Box sx={{ my: "4vh", display: "flex", flexDirection: "row" }} >

            <Typography variant="h2" sx={{ color: "primary.verydark", fontWeight: "normal" }}>Menu</Typography>
            <InsertSubCategory
              handleInsertNewSubCategory={handleInsertNewSubCategory}
            />
          </Box>

          <Grid container spacing={2} sx={{ display: "flex", alignItems: "stretch" }}>
            {subCategories.map((dataObj) => {
              return (
                <Grid item xs={3} >
                  <SubCategoryCard
                    key={dataObj.id}
                    id={dataObj.id}
                    title={dataObj.name}
                    description={dataObj.desc}
                    price={dataObj.price}
                    image={dataObj.image}
                    updateSubCategoryForm={updateSubCategoryForm}
                  />
                </Grid>
              );
            })}
          </Grid>
          <AddSubCategoryCard handleInsertNewSubCategory={handleInsertNewSubCategory} />


        </Container>
        {/* This should save to to the server the new menu*/}
        <Button variant="contained"
          sx={{
            width: "10vw",
            height: "4vh",
            mt: "5vh",
            ml: "45vw",
            mb: "6vh"
          }}
          onClick={saveData}>Save</Button>
      </Box>
    </ThemeProvider >
  );
}

export default MenuBuilder;