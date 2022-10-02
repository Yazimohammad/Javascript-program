import { Button, Grid, TextField } from "@mui/material";
import React from "react";

export const RemoveRoom = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField label="Room Number" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Delete Room</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
