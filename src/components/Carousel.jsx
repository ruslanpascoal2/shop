import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";
import { Stack, Box, Button, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
const useStyles = makeStyles({
  root: {
    height: "600px",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
});

export const CarouselComponent = () => {
  const styles = useStyles();
  var items = [
    {
      name: "/ Running",
      textPosition: "left",
      description:
        " Lorem, ipsum dolor sciis, quo soluta eligendi odio consequatur!",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1780&q=80",
    },
    {
      name: "/ Sneakers",
      textPosition: "left",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae officiis, quo soluta eligendi odio consequatur!",
      image:
        "https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",
    },
  ];

  return (
    <Carousel
      fullHeightHover={true}
      indicators={false}
      navButtonsAlwaysInvisible={true}
      className={styles.root}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item({ item }) {
  return (
    <Stack
      sx={{
        padding: "2rem",
        backgroundImage: "url(" + item.image + ")",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
    <Navbar/>
      <Box>
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            padding: "0 3rem",
            width: "100%",
            display: "flex",
            justifyContent: `${
              item.textPosition === "left" ? "flex-start" : "flex-end"
            }`,
          }}
        >
          <Stack textAlign="start" width="25%">
            <Typography variant="h4" fontWeight="bold">
              {item.name}
            </Typography>
            <Typography sx={{ margin: "1rem 0" }}>
              {item.description}
            </Typography>
            <Button variant="outlined" color="primary">
              Check it out!
            </Button>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
