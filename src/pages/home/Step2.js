import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import FileUploader from "components/FileUploader";
import LoadingContainer from "components/LoadingContainer";
import { formatArray } from "lib/arrayObject";
import { wrapFields } from "models/airtableHelper";
import { setBookList } from "models/bookModel";
import { getBookList } from "models/bookModel";
import formatCSV, { checkCSVColumns } from "models/csvHelper";
import React, { useState } from "react";

const Step2 = ({ data = {}, onChangeStep = () => {} }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => {
    console.log("isLoaded", isLoaded);
  };
  const handleLoaded = (value = [], fileInfo = {}) => {
    setIsLoading(true);
    setIsLoaded(false);
    getBookList({
      value: value,
      onFinish: (resTablelist) => {
        const CSVColumns = formatArray(value?.[0]);
        const dynamicKeys = ["ISBN", "Title", "Author"];
        const airtableKeys = Object.keys(
          resTablelist?.[0]?.fields ?? {}
        ).sort();
        const isSameHeader = checkCSVColumns({
          csvColumns: CSVColumns,
          dbColumns: dynamicKeys,
        });
        const isCorrectHeader = checkCSVColumns({
          csvColumns: CSVColumns,
          dbColumns: airtableKeys,
        });

        const formatCSVData = formatCSV({
          value,
          columns: ["Title", "Author", "ISBN"],
          airtableData: resTablelist,
        });

        console.log("Customer data", data);

        if (!isSameHeader || !isCorrectHeader) {
          setError("CSV Format error!");
          setIsLoading(false);
          return;
        }
        if (!resTablelist) {
          setError("Error!");
          setIsLoading(false);
          return;
        }
        if (!resTablelist?.length) {
          setError("No Data!");
          setIsLoading(false);
          return;
        }
        if (formatCSVData.length < 1) {
          setError("Existing data!");
          setIsLoading(false);
          return;
        }

        // add users field name
        const submitData = formatCSVData.map((row) => ({
          ...(data ?? {}),
          ...(row ?? {}),
        }));

        // insert records
        setBookList({
          data: wrapFields(submitData),
          onFinish: (res) => {
            setIsLoading(false);
            setIsLoaded(true);
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
              Step 2 - Upload Your Collection
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
          {/* onClick={() => onChangeStep(1)} */}
          <Grid item>
            <Button
              onClick={handleNext}
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

export default Step2;
