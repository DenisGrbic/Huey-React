import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { checkValid, getValidationMessage } from "lib/strings";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: "30px!important",
    color: "#0a86f0",
  },
  text: {
    fontSize: "18px!important",
  },
}));

const layout = [
  { name: "first_name", type: "text", label: "What is your first name?" },
  { name: "email", type: "email", label: "What is your email?" },
];

const GetStartedStep1 = ({ data = {}, onChangeStep = () => {} }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({ first_name: "", email: "" });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e?.target ?? {};
    setFormData((s) => ({ ...(s ?? {}), [name]: value }));
    setError((s) => ({
      ...(s ?? {}),
      [name]: checkValid(type, value) ? "" : getValidationMessage(type),
    }));
  };

  const handleNext = () => {
    const isValid = layout.reduce((ret, cur) => {
      const t = checkValid(cur.type, formData?.[cur.name]);
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
    console.log("@go next");
    onChangeStep(1);
  };

  useEffect(() => {
    setFormData(data);
  }, [data]);

  return (
    <Box className={classes.root}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h3" color="primary" className="text-red">
            Get started
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.text}>I need a few details</Typography>
        </Grid>
        {layout.map((item, itemIndex) => (
          <Grid key={itemIndex} item lg={12} md={12} sm={12} xs={12}>
            <TextField
              name={item?.name ?? ""}
              value={formData?.[item?.name ?? ""] ?? ""}
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
            color="primary"
            variant="contained"
            startIcon={<ArrowBack />}
          >
            Back
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={handleNext}
            color="primary"
            variant="contained"
            startIcon={<ArrowForward />}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetStartedStep1;
