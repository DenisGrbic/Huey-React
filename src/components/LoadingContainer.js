import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function LoadingContainer({ loading = false, children = "" }) {
  return (
    <div className="relative w-full h-full">
      {loading && (
        <Box
          className="absolute w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Box>
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
