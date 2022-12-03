import * as React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Cancel, Clear } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "40%",
  bgcolor: "background.paper",

  p: 4,
};

export default function Model(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={(e) => {
          props.setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="text-black">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="border-b-2 text-center"
          >
            Nepali Text
            <Clear
              className="float-right"
              onClick={(e) => {
                props.setOpen(false);
              }}
            />
          </Typography>
          <Typography
            id="modal-modal-description"
            className="whitespace-pre-wrap overflow-scroll"
            sx={{ mt: 2 }}
          >
            {props.text}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
