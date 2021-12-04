import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Success = ({ data = {}, onChangeStep = () => {} }) => {
  console.log(data.school_name);
  return (
    <Box>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h4" color="primary">
            Success!
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h5" color="">
            We have recieved CSV file for {data?.school_name ?? "your school"}
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h5" color="">
            We will send you an email with your Bookbot link.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => onChangeStep(-1)}
            color="success"
            variant="contained"
            startIcon={<ArrowBack />}
          >
            <Typography>Back</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Success;
