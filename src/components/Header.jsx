import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Stack,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../assets/images/image 4.png";
import { useState } from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const DrawerIcon = ({ icon, title, isOpen, toggleDrawer, drawerContent }) => (
  <>
    <Box display="flex" alignItems="center" marginLeft="20px">
      <IconButton color="text.gray" onClick={toggleDrawer}>
        {icon}
      </IconButton>
      <Typography
        variant="caption"
        color="#5C5C5C"
        fontSize={"14px"}
        fontWeight={
          title === "Профиль" || title === "Закладки" ? "normal" : "700"
        }
      >
        {title}
      </Typography>
    </Box>

    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
      <Box
        width={385}
        padding={2}
        sx={{
          position: "relative",
        }}
      >
        <Stack
          sx={{
            height: "100dvh",
          }}
        >
          <Typography
            variant="caption"
            fontSize={"24px"}
            component="div"
            fontWeight={"700"}
            sx={{ margin: "30px" }}
          >
            {title === "Профиль" || title === "Закладки" ? title : "Корзина"}
          </Typography>
          {drawerContent}
        </Stack>
      </Box>
    </Drawer>
  </>
);

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(null);
  const { totalPrice } = useSelector((state) => state.cartItems);

  const toggleDrawer = (drawer) => {
    setOpenDrawer((prevDrawer) => (prevDrawer === drawer ? null : drawer));
  };
  const drawerItems = [
    {
      icon: <ShoppingCartOutlinedIcon />,
      title: `${totalPrice} руб.`,
      isOpen: openDrawer === "cart",
      toggleDrawer: () => toggleDrawer("cart"),
      drawerContent: <CartItems/>,
    },
    {
      icon: <FavoriteBorderOutlinedIcon />,
      title: "Закладки",
      isOpen: openDrawer === "favorites",
      toggleDrawer: () => toggleDrawer("favorites"),
      drawerContent: <>Закладки</>,
    },
    {
      icon: <AccountCircleOutlinedIcon />,
      title: "Профиль",
      isOpen: openDrawer === "profile",
      toggleDrawer: () => toggleDrawer("profile"),
      drawerContent: <>Профиль</>,
    },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid #EAEAEA",
        padding: "20px",
        width: "100%",
      }}
      elevation={0}
    >
      <Toolbar>
        <Box display="flex" alignItems="center">
          {/* Logo */}
          <img src={logo} alt="Logo" style={{ marginRight: "16px" }} />
        </Box>
        <Box flex="1">
          <Typography variant="h6" color="black" fontWeight={700}>
            KROSS STORE
          </Typography>
          <Typography color="text.gray" mt={"-5px"}>
            Магазин лучших кроссовок
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          {drawerItems.map((item, index) => (
            <DrawerIcon
              key={index}
              icon={item.icon}
              title={item.title}
              isOpen={item.isOpen}
              toggleDrawer={item.toggleDrawer}
              drawerContent={item.drawerContent}
            />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
