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
      .post("http://127.0.0.1:8000/feedback/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="fixed bottom-5 right-5 z-2">
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
