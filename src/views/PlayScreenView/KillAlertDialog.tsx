import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Typography
} from "@mui/material";
import React, { FunctionComponent } from "react";
import { Model } from "../../types";

export interface Props {
  open: boolean;
  onClose: () => void;
  onActiveChange: (modelId: Model) => void;
  model: Model;
}

const KillAlertDialog: FunctionComponent<Props> = ({
  onClose,
  open,
  onActiveChange,
  model
}) => (
  <Dialog onClose={onClose} open={open}>
    <Grid
      component={Alert}
      severity="warning"
      container
      direction="row"
      alignItems="center"
      justifyContent="Flex-start"
      variant="filled"
      sx={{ width: "100%", color: "#F3F4F6", backgroundColor: "#FF8A3C" }}
    >
      <Typography>KILL</Typography>
    </Grid>
    <DialogContent>
      <DialogContentText>kill.</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button
        variant="contained"
        onClick={() => {
          onClose();
          onActiveChange(model);
        }}
      >
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);
export default KillAlertDialog;