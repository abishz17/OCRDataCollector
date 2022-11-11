import React from "react";
import { Box } from "@mui/material";
import UploadForm from "./UploadForm";
// import UploadForm from "./UploadForm";

const BoxUI = (props) => {
  return (
    <div>
      <Box
        mt={5}
        display="inline-block"
        justify-content="center"
        sx={{
          bgcolor: "primary.main",
          color: "text.secondary",
          border: 1,
          borderRadius: 2,
          px: 2,
          zIndex: "tooltip",
          boxShadow: 4,
        }}
      >
        <p>{props.data}</p>
        <UploadForm />
      </Box>
    </div>
  );
};

export default BoxUI;
