import {
  Container,
  Stack,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CarouselComponent } from "./Carousel";
const useStyles = makeStyles({
  root: {
    background: "#fff",
    width: "100vw",
    color: "#333",
    display: "flex",
    alignItems: "center",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

const Header = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Container maxWidth="xl">
        <CarouselComponent />
      </Container>
    </Box>
  );
};

export default Header;
