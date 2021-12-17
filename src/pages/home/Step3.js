import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import FileUploader from "components/FileUploader";
import LoadingContainer from "components/LoadingContainer";
import { formatArray } from "lib/arrayObject";
import { wrapFields } from "models/airtableHelper";
import { setTableList } from "models/bookModel";
import { getTableList } from "models/bookModel";
import formatCSV, { checkCSVColumns } from "models/csvHelper";
import React, { useState } from "react";

const Step3 = ({ data = {}, onChangeStep = () => {} }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoaded = (value = [], fileInfo = {}) => {
    setIsLoading(true);
    getTableList({
      value: value,
      onFinish: (resTablelist) => {
        const CSVColumns = formatArray(value?.[0]);
        const airtableKeys = Object.keys(
          resTablelist?.[0]?.fields ?? {}
        ).sort();
        const isSame = checkCSVColumns({
          csvColumns: CSVColumns.sort(),
          dbColumns: airtableKeys,
        });

        const formatCSVData = formatCSV({
          value,
          columns: ["Title", "Author", "ISBN"],
          airtableData: resTablelist,
        });

        if (!resTablelist) {
          setError("Error!");
          setIsLoading(false);
          return;
        } else if (!resTablelist?.length) {
          setError("No Data!");
          setIsLoading(false);
          return;
        } else if (formatCSVData.length < 1) {
          setError("Existing data!");
          setIsLoading(false);
          return;
        } else if (!isSame) {
          setError("Format error!");
          setIsLoading(false);
          return;
        }

        // insert records
        setTableList({
          data: wrapFields(formatCSVData),
          onFinish: (res) => {
            setIsLoading(false);
            console.log("onFinish", res);
          },
        });
      },
    });
  };

  return (
    <LoadingContainer loading={isLoading}>
      <Box>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h4" color="primary">
              Step 3 - Upload Your Collection
            </Typography>
          </Grid>
          {error && (
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid
              container
              spacing={3}
              mt={-1}
              mb={0.5}
              justifyContent="center"
            >
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
    </LoadingContainer>
  );
};

export default Step3;
