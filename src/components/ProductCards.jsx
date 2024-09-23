import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductsData } from "../features/productsSlice";
import ProductCard from "./ProductCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDebouncedCallback } from "../hooks/useDebouncedCallback";
import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";

const ProductCards = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const debouncedSearch = useDebouncedCallback((value) => {
    setSearchQuery(value);
  }, 300);
  const dispatch = useDispatch();
  const { productsData, loading, error } = useSelector(
    (state) => state.products
  );
  console.log(productsData);
  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    // Filter products by name or price
    if (searchQuery.trim() !== "") {
      const filtered = productsData?.filter((product) => {
        const nameMatches = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const priceMatches = product.price.toString().includes(searchQuery);
        return nameMatches || priceMatches;
      });
      setFilteredProducts(filtered);
    } else {
      // If search query is empty, show all products
      setFilteredProducts(productsData);
    }
  }, [searchQuery, productsData]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <Stack
      spacing={3}
      sx={{
        // alignItems:'center',
        width: "100%",
        maxWidth: "960px",
        margin: "61px auto",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          Все кроссовки
        </Typography>
        <TextField
          sx={{
            borderRadius: "10px",
          }}
          size="small"
          id="input-with-sx"
          placeholder="Поиск..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => debouncedSearch(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Stack>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="40px"
        maxWidth="960px"
        justifySelf={"center"}
        margin="auto"
      >
        {(filteredProducts?.length > 0 ? filteredProducts : productsData)?.map(
          (product) => (
            <ProductCard key={product.id} product={product} />
          )
        )}
      </Box>
    </Stack>
  );
};

export default ProductCards;
