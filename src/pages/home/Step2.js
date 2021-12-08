import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import FileUploader from "components/FileUploader";
import { formatCSV } from "models/csvHelper";
import React from "react";

const Step2 = ({ data = {}, onChangeStep = () => {} }) => {
  const handleLoaded = (value = [], fileInfo = {}) => {
    console.log(formatCSV({ value, columns: ["Title", "Author", "ISBN"] }));
  };

  return (
    <Box>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h4" color="primary">
            Step 2 - Upload Your Collection
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={3} mt={-1} mb={0.5} justifyContent="center">
            <Grid item>
              <FileUploader onLoaded={handleLoaded} />
            </Grid>
          </Grid>
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

export default Step2;
