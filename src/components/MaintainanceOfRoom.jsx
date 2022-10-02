import { Button, TextField, Grid } from "@mui/material";
import React from "react";

export const MaintainanceofRoom = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid Item xs={3}>
          <TextField label="Room Number" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <TextField label="Cost" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Save</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
