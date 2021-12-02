import { Container } from "@mui/material";
import React from "react";

const PageCenterLayout = ({ children = "", ...props }) => {
  return (
    <div>
      <Container>
        <div className="min-h-screen flex flex-col justify-center items-center ">
          <div className="border-2 border-gray sm:p-4 p-1 rounded-xl">
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageCenterLayout;
