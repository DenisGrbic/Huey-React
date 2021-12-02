import { Collapse, Stack } from "@mui/material";
import HorizontalLinearStepper from "components/HorizontalLinearStepper";
import PageCenterLayout from "components/PageCenterLayout";
import React, { useState } from "react";
import GetStartedStep1 from "./GetStartedStep1";

const GetStarted = ({ onNext = () => {} }) => {
  const [data, setData] = useState({});
  const [step, setStep] = useState(0);

  const handleChangeStep = (value) => {
    setStep((s) => s + value);
  };

  return (
    <div>
      <PageCenterLayout>
        <Stack spacing={2}>
          <HorizontalLinearStepper step={step} />
          <div>
            <Collapse in={step === 0}>
              <div>
                <GetStartedStep1 data={data} onChangeStep={handleChangeStep} />
              </div>
            </Collapse>
            <Collapse in={step === 1}>
              <div>
                <GetStartedStep1 data={data} onChangeStep={handleChangeStep} />
              </div>
            </Collapse>
          </div>
        </Stack>
      </PageCenterLayout>
    </div>
  );
};

export default GetStarted;
