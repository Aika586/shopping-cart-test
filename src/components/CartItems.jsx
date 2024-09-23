import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Stack, Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ButtonElement from "./Button";
import boxImage from "../assets/images/image 8.png";

const OrderBox = ({ label, price }) => {
  return (
    <Box display={"flex"} alignItems={"baseline"} gap={"8px"}>
      <Typography>{label}:</Typography>
      <Box sx={{ width: "100%", borderBottom: "1px dashed #DFDFDF" }} />
      <Typography fontWeight={"600"}>{price}руб.</Typography>
    </Box>
  );
};

const EmptyCard = () => {
  return (
    <Stack
      sx={{
        width: "285px",
        margin: "auto",
      }}
    >
      <Stack
        spacing={1}
        sx={{
          alignItems: "center",
        }}
      >
        <img src={boxImage} alt="emptyBox" width="120px" height="auto" />
        <Typography variant="h5" fontWeight={"600"}>
          Корзина пустая
        </Typography>
        <Typography
          variant="caption"
          color={"#000000"}
          fontSize={"14px"}
          component="div"
          textAlign={"center"}
          sx={{
            maxWidth: "270px",
          }}
        >
          Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </Typography>
      </Stack>
      <ButtonElement startIcon={<ArrowBackOutlinedIcon />}>
        Вернуться назад
      </ButtonElement>
    </Stack>
  );
};
const CartItems = () => {
  const { items, totalPrice, tax } = useSelector((state) => state.cartItems);

  if (items?.length === 0) {
    return <EmptyCard />;
  }

  return (
    <>
      <Stack
        spacing={2}
        sx={{
          overFlowY: "auto",
          alignItems: "center",
          flex: 1,
        }}
      >
        {items.map((item) => (
          <ProductCard key={item.id} product={item} isCartItem />
        ))}
      </Stack>

      <Box
        sx={{
          marginTop: "auto",
          marginBottom: "20px",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            width: "325px",
            ml: "30px",
          }}
        >
          <OrderBox label={"Итого"} price={totalPrice} />
          <OrderBox label={"Налог\u00A05%"} price={tax} />
          <ButtonElement endIcon={<ArrowForwardIcon />}>
            Оформить заказ
          </ButtonElement>
        </Stack>
      </Box>
    </>
  );
};

export default CartItems;
