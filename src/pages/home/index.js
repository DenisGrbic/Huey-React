import { Collapse, Stack } from "@mui/material";
import HorizontalLinearStepper from "components/HorizontalLinearStepper";
import PageCenterLayout from "components/PageCenterLayout";
import React, { useState } from "react";
import GetStartedStep from "./GetStartedStep";
import Welcome from "./Welcome";

const Home = ({ onNext = () => {} }) => {
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
                <Welcome data={data} onChangeStep={handleChangeStep} />
              </div>
            </Collapse>
            <Collapse in={step === 1}>
              <div>
                <GetStartedStep data={data} onChangeStep={handleChangeStep} />
              </div>
            </Collapse>
          </div>
        </Stack>
      </PageCenterLayout>
    </div>
  );
};

export default Home;