import { IconButton, Stack, Typography } from "@material-ui/core";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
});

const Navbar = () => {
  const styles = useStyles();

  return (
    <Stack className={styles.flex} direction="row" height="600px">
      <IconButton aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography fontFamily="Roboto Slab" variant="h3">
        <img src="Blaze.png" height="100"/>
      </Typography>
      <IconButton aria-label="shopping-cart">
        <ShoppingCartIcon />
      </IconButton>
    </Stack>
  );
};

export default Navbar;
