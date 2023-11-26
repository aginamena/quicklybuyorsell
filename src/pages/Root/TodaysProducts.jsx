import { Box, Container, Toolbar, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { getAllProductsFromFirestore } from "pages/util";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function TodaysProducts() {
  async function getLast8PublishedProducts() {
    const allProducts = await getAllProductsFromFirestore("publishedProducts");
    if (allProducts.length <= 8) {
      return allProducts.reverse();
    } else {
      return allProducts.splice(allProducts.length - 8).reverse();
    }
  }

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("TodaysProducts", getLast8PublishedProducts);

  if (isError) {
    alert("An error occured");
    return null;
  }
  return (
    <Container>
      <Toolbar />
      <Typography
        variant="h5"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        Todays products
      </Typography>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <DisplayProducts products={products} isPrivate={false} />
      )}
    </Container>
  );
}
