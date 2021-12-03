import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Terms = ({ data = {}, onChangeStep = () => {} }) => {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h3" color="primary" className="text-red">
            Get started
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h5" color="">
            Hi Caroline. It’s great to have you onboard.
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="p" color="">
            Now we need to add your collectiion to Huey so students get
            recommendations that are in your library.
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="p" color="">
            It takes about 10 mins!
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => onChangeStep(-1)}
            color="primary"
            variant="contained"
            startIcon={<ArrowBack />}
          >
            <Typography>Back</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => onChangeStep(1)}
            color="primary"
            variant="contained"
            endIcon={<ArrowForward />}
          >
            <Typography>Next</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Terms;
