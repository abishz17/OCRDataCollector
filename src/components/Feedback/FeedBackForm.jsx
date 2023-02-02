import * as React from "react";
import FeedbackIcon from "@mui/icons-material/Feedback";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { FeedbackDialog } from "mui-feedback-dialog";
import axios from "axios";

export default function FeedBackForm() {
  const [open, setIsOpen] = useState(false);
  const onSubmit = (data) => {
    axios
      .post("/feedback/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="fixed bottom-10 text-white bg-white rounded-3xl right-5 z-50">
      <Tooltip title="Give us your feedback">
        <IconButton
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <FeedbackIcon />
        </IconButton>
      </Tooltip>
      <FeedbackDialog
        open={open}
        onClose={() => setIsOpen(false)}
        noScreenshot
        onSubmit={onSubmit}
        showSuccessScreen
        text={{
          contentText: "Help us improve with your feedback",
        }}
      />
    </div>
  );
}
