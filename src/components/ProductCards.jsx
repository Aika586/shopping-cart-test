import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsData } from "../features/productsSlice";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

const ProductCards = () => {
  const dispatch = useDispatch();
  const { productsData, loading, error } = useSelector(
    (state) => state.products
  );
  console.log(productsData);
  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap="40px"
      maxWidth="960px"
      justifySelf={"center"}
      margin="auto"
    >
      {productsData?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default ProductCards;
