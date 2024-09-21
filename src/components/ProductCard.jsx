import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import PlusIcon from "../assets/iconcomponents/PlusIcon";
import HeartIcon from "../assets/iconcomponents/HeartIcon";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useState } from "react";
import SelectIcon from "../assets/iconcomponents/selectIcon";

const ProductCard = ({ product }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAddedToCart(true); // Set the state to true when product is added
  };

  return (
    <Card
      sx={{
        width: 210,
        height: 260,
        position: "relative",
        borderRadius: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "20px",
        boxShadow: isAddedToCart ? "0px 14px 30px 0px #0000000D" : "none",
        border:'1px solid #F8F8F8'
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        height="112px"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "contain" }}
      />

      {/* Card Content */}
      <CardContent>
        <Typography
          gutterBottom
          variant="caption"
          component="div"
          fontSize={"14px"}
          maxWidth={"150px"}
          lineHeight={"16px"}
        >
          {product.name}
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" fontSize={"11px"} color={"#BDBDBD"}>
              ЦEНА:
            </Typography>
            <Typography variant="body2" fontFamily={"14px"} fontWeight={"700"}>
              {product.price}руб.
            </Typography>
          </Box>

          <IconButton
            color="primary"
            size="small"
            onClick={handleAddToCart}
            disabled={isAddedToCart}
          >
          {isAddedToCart ? <SelectIcon /> : <PlusIcon />}
          </IconButton>
        </Box>
      </CardContent>
      <IconButton
        // onClick={handleAddToFavorites}
        sx={{ position: "absolute", top: 29, left: 30 }}
      >
        <HeartIcon />
      </IconButton>
    </Card>
  );
};

export default ProductCard;
