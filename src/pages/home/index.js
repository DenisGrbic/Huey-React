import { Collapse, Stack } from "@mui/material";
import HorizontalLinearStepper from "components/HorizontalLinearStepper";
import PageCenterLayout from "components/PageCenterLayout";
import React, { useState } from "react";
import GetStarted from "./GetStarted";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Success from "./Success";
import Terms from "./Terms";
import Welcome from "./Welcome";

const Home = () => {
  const [data, setData] = useState({});
  const [step, setStep] = useState(0);

  const handleChangeStep = (value) => {
    setStep((s) => s + value);
  };

  const handleChange = (param) => {
    setData(param);
  };

  return (
    <div>
      <PageCenterLayout>
        <Stack spacing={2}>
          <HorizontalLinearStepper step={step} />
          <div>
            <Collapse in={step === 0}>
              <div>
                <Welcome
                  data={data}
                  onChange={handleChange}
                  onChangeStep={handleChangeStep}
                />
              </div>
            </Collapse>
            <Collapse in={step === 1}>
              <div>
                <GetStarted
                  data={data}
                  onChange={handleChange}
                  onChangeStep={handleChangeStep}
                />
              </div>
            </Collapse>
            <Collapse in={step === 2}>
              <div>
                <Terms
                  data={data}
                  onChange={handleChange}
                  onChangeStep={handleChangeStep}
                ></Terms>
              </div>
            </Collapse>
            <Collapse in={step === 3}>
              <div>
                <Step1
                  data={data}
                  onChange={handleChange}
                  onChangeStep={handleChangeStep}
                ></Step1>
              </div>
            </Collapse>
            <Collapse in={step === 4}>
              <div>
                <Step2
                  data={data}
                  onChange={handleChange}
                  onChangeStep={handleChangeStep}
                ></Step2>
              </div>
            </Collapse>
            <Collapse in={step === 5}>
              <div>
                <Success
                  data={data}
                  onChange={handleChange}
                  onChangeStep={handleChangeStep}
                ></Success>
              </div>
            </Collapse>
          </div>
        </Stack>
      </PageCenterLayout>
    </div>
  );
};

export default Home;
