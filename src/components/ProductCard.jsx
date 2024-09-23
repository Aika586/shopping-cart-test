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
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import SelectIcon from "../assets/iconcomponents/selectIcon";
import DeleteIcon from "../assets/iconcomponents/DeleteIcon";
import { removeFromCart } from "../features/cartSlice";

const ProductCard = ({ product, isCartItem }) => {
  const { items } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const isAddedToCart = items?.some(
    (item) => item.id === product.id && item.isAddedToCart
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id: product.id }));
  };
 

  return (
    <Card
      sx={{
        width: isCartItem ? 325 : 210,
        height: isCartItem ? 119 : 260,
        position: "relative",
        borderRadius: isCartItem ? "20px" : "40px",
        display: "flex",
        flexDirection: isCartItem ? "row" : "column",
        alignItems: "center",
        paddingBlock: "20px",
        paddingInline: "10px",
        boxShadow:
          isAddedToCart && !isCartItem ? "0px 14px 30px 0px #0000000D" : "none",
        border: "1px solid #F8F8F8",
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        height={isCartItem ? "70px" : "112px"}
        width={isCartItem ? "70px" : "auto"}
        image={product?.image}
        alt={product?.name}
        sx={{
          width: isCartItem ? "70px" : "auto",
          objectFit: "contain",
          alignSelf: isCartItem && "flex-start",
        }}
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
          {product?.name}
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            {!isCartItem && (
              <Typography variant="body2" fontSize={"11px"} color={"#BDBDBD"}>
                ЦEНА:
              </Typography>
            )}
            <Typography variant="body2" fontFamily={"14px"} fontWeight={"700"}>
              {product?.price}руб.
            </Typography>
          </Box>

          <IconButton
            color="primary"
            size="small"
            onClick={isCartItem ? handleRemoveFromCart : handleAddToCart}
            disabled={isAddedToCart && !isCartItem}
            sx={{
              position: isCartItem ? "absolute" : "static",
              bottom: 20,
              right: 20,
            }}
          >
            {isAddedToCart && !isCartItem ? (
              <SelectIcon />
            ) : isCartItem ? (
              <DeleteIcon />
            ) : (
              <PlusIcon />
            )}
          </IconButton>
        </Box>
      </CardContent>
      {!isCartItem && (
        <IconButton
          // onClick={handleAddToFavorites}
          sx={{ position: "absolute", top: 29, left: 30 }}
        >
          <HeartIcon />
        </IconButton>
      )}
    </Card>
  );
};

export default ProductCard;
