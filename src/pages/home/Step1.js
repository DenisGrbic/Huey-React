import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import CsvGuideModal from "components/CsvGuideModal";
import CsvLogo from "assets/img/csv_logo.png";

import React from "react";

const Step1 = ({ data = {}, onChangeStep = () => {} }) => {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h4" color="primary">
            Step1 - Export Your Collection
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h5" color="">
            Export a CSV file from your library management system
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="p" color="">
            Please include 10,000 most recenlty published titles
            <br />
            <Grid container spacing={3} mt={-1} mb={.5}>
              <Grid item>
                -ISBN
                <br />
                -Title
                <br />
                -Author
              </Grid>
              <Grid item>
                <img src={CsvLogo} alt="CsvLogo" />
              </Grid>
            </Grid>
          </Typography>
          <CsvGuideModal></CsvGuideModal>
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

export default Step1;
