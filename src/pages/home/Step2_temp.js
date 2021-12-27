import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { checkValid, getValidationMessage } from "lib/strings";
import React, { useState } from "react";
// import { setSchoolList } from "models/schoolModel";
import { getSchoolList } from "models/schoolModel";

const layout = [
  { name: "school_name", type: "text", label: "Name of your school?" },
  {
    name: "postcode",
    type: "text",
    label: "Postcode where your school is located?",
  },
];

const Step2 = ({ data = {}, onChange = () => {}, onChangeStep = () => {} }) => {
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e?.target ?? {};
    onChange((s) => ({ ...(s ?? {}), [name]: value }));
    setError((s) => ({
      ...(s ?? {}),
      [name]: checkValid(type, value) ? "" : getValidationMessage(type),
    }));
  };

  const handleNext = () => {
    const isValid = layout.reduce((ret, cur) => {
      const t = checkValid(cur.type, data?.[cur.name]);
      setError((s) => ({
        ...(s ?? {}),
        [cur.name]: t ? "" : getValidationMessage(cur.type),
      }));
      return ret && t;
    }, true);

    if (!isValid) {
      console.log("error");
      return;
    }
    getSchoolList({
      onFinish: (resTablelist) => {
        console.log("resTablelist", resTablelist);
        // insert records
        // setBookList({
        //   data: wrapFields(formatCSVData),
        //   onFinish: (res) => {
        //     setIsLoading(false);
        //     setIsLoaded(true);
        //   },
        // });
      },
    });
    onChangeStep(1);
  };

  return (
    <Box>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h4" color="primary">
            Step 2 - Name your collection
          </Typography>
        </Grid>
        {error && (
          <Grid item lg={12} md={12} sm={12} xs={12}>
            {/* <Alert severity="error">{error}</Alert> */}
          </Grid>
        )}
        {layout.map((item, itemIndex) => (
          <Grid key={itemIndex} item lg={12} md={12} sm={12} xs={12}>
            <TextField
              name={item?.name ?? ""}
              value={data?.[item?.name ?? ""] ?? ""}
              onChange={handleChange}
              label={item?.label ?? ""}
              color="primary"
              type={item?.type ?? ""}
              error={Boolean(error?.[item?.name ?? ""])}
              helperText={error?.[item?.name ?? ""] ?? ""}
              fullWidth
            />
          </Grid>
        ))}
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
  );
};

export default Step2;
