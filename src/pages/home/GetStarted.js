import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { checkValid, getValidationMessage } from "lib/strings";
import React, { useState } from "react";

const layout = [
  { name: "first_name", type: "text", label: "What is your first name?" },
  { name: "email", type: "email", label: "What is your email?" },
];

const GetStarted = ({
  data = {},
  onChange = () => {},
  onChangeStep = () => {},
}) => {
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
    onChangeStep(1);
  };

  return (
    <Box>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h4" color="primary">
            Get started
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h5" color="">
            I need a few details
          </Typography>
        </Grid>
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

export default GetStarted;
