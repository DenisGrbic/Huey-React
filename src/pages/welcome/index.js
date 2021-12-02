import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "30px!important",
    color: "#0a86f0",
  },
  text: {
    fontSize: "18px!important",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: 35,
    [theme.breakpoints.down("md")]: {
      columnGap: 15,
      marginTop: 20,
    },
    "& .MuiButton-root": {
      minHeight: 200,
      width: "100%",
      maxWidth: "50%",
      fontSize: 22,
      lineHeight: "28px",
      textTransform: "none",
      margin: "0 40px",
      padding: 30,
      [theme.breakpoints.down("md")]: {
        // background: 'red'
        margin: 0,
        fontSize: 14,
        lineHeight: "21px",
        padding: 10,
      },
    },
  },
}));

export default function Welcome() {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.title}>Welcome 👋</Typography>
      <Typography className={classes.text}>
        What would you like to do?
      </Typography>
      <Box className={classes.buttonGroup}>
        <Button color="success" variant="contained">
          Get a bookbot that recommends books in my school collection
        </Button>
        <Button color="primary" variant="contained">
          Find out more Huey the Bookot
        </Button>
      </Box>
    </Box>
  );
}
