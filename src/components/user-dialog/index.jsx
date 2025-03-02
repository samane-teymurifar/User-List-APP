import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

export default function UserDialog({
  openModal,
  setOpenModal,
  editingUser,
  name,
  setName,
  job,
  setJob,
  handleCreateUser,
  handleEditUser,
  processing,
}){
  return (
    <Dialog open={openModal} onClose={() => setOpenModal(false)}>
      <DialogTitle>{editingUser ? "Edit User" : "Create New User"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="dense"
        />
        <TextField
          fullWidth
          label="Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenModal(false)} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={editingUser ? handleEditUser : handleCreateUser}
          color="primary"
          variant="contained"
          disabled={processing}
        >
          {processing ? <CircularProgress size={24} /> : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

