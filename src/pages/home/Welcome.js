import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      columnGap: 15,
      marginTop: 20,
    },
    "& .MuiButton-root": {
      minHeight: 200,
      width: "100%",
      fontSize: 22,
      lineHeight: "28px",
      textTransform: "none",
      padding: 30,
      [theme.breakpoints.down("md")]: {
        fontSize: 14,
        lineHeight: "21px",
        padding: 10,
      },
    },
  },
}));

const Welcome = ({ onChangeStep = () => {} }) => {
  const classes = useStyles();

  const handleNext = () => {
    onChangeStep(1);
  };

  return (
    <Box>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h4" color="primary">
            Welcome 👋
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h5" className={classes.text}>
            What would you like to do?
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.buttonGroup} mt={0}>
        <Grid item lg={6} md={6} sm={12} xs={6}>
          <Button color="primary" variant="contained" onClick={handleNext}>
            Get a bookbot that recommends books in my school collection
          </Button>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={6}>
          <Button color="success" variant="contained">
            Find out more Huey the Bookot
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;