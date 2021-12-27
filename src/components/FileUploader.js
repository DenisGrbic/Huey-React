import { Grid, Stack, Typography } from "@mui/material";
import CsvLogo from "assets/img/csv_logo.png";
import * as React from "react";
import ReadCSVButton from "./ReadCSVButton";

export default function UploadButtons({ onLoaded = () => {} }) {
  return (
    <ReadCSVButton onLoaded={onLoaded}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Grid
          container
          sx={{ borderStyle: "dashed", cursor: "pointer" }}
          justifyContent="center"
          className="border-2 border-gray sm:p-6 sm:pb-4 p-1"
        >
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            textAlign="center"
            mb={1.5}
          >
            <Grid container justifyContent="center">
              <img src={CsvLogo} alt="CSVLogo" />
            </Grid>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" color="black" className="text-center">
              Upload your CSV file.
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </ReadCSVButton>
  );
}
