import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

export default function DialogCmp({
  openDialog,
  setNumber,
  loading,
  setLoading,
}) {
  const [phoneNumber, setPhoneNumber] = useState("");

  function validatePhoneNumber() {
    setLoading(true);
    // Define a regular expression for Nigerian phone numbers
    // This code defines a regular expression that matches Nigerian phone numbers with the country code '+234' or '0'
    // followed by '7', '8', or '9', and then the remaining digits.
    const regex = /^(\+234|0)[789][01]\d{8}$/;
    if (!regex.test(phoneNumber)) {
      alert("Phone number is invalid");
      setLoading(false);
    } else {
      setNumber(phoneNumber);
    }
  }
  return (
    <Dialog open={openDialog}>
      <DialogTitle>Complete your profile</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your phone number below. It should be in the format
          +2348123456789
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          type="text"
          fullWidth
          variant="standard"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Button onClick={validatePhoneNumber}>Confirm</Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
