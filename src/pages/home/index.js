import { Collapse, Stack } from "@mui/material";
import HorizontalLinearStepper from "components/HorizontalLinearStepper";
import PageCenterLayout from "components/PageCenterLayout";
import React, { useState } from "react";
import GetStarted from "./GetStarted";
import Terms from "./Terms";
import Welcome from "./Welcome";
import Step1 from "./Step1";

const Home = ({ onNext = () => {} }) => {
  const [data, setData] = useState({});
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");

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
          </div>
        </Stack>
      </PageCenterLayout>
    </div>
  );
};

export default Home;
