import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent } from "@mui/material";

export const NavBar = () => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Card>
            <img className="imglogo" src="/logo.png" alt=" Pickupbiz" />
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Link to="/frontdesk">Front Desk</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Link to="/admin">Admin</Link>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Link to="/eshopp">e-shopp</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <Link to="/chain">Chaining</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <Link to ="/product">MyProduct</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <Link to="/Chat">Chat App</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <Link to="/Login">Login</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <Link to="/Signup">SignUp</Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
