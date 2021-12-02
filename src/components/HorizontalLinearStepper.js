import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import * as React from "react";

const steps = [
  "Welcome",
  "Get started",
  "Terms",
  "Step 1",
  "Step 2",
  "Step 3",
  "Success",
];

export default function HorizontalLinearStepper({ step = 0 }) {
  return (
    <div>
      <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
