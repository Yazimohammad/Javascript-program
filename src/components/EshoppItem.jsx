import React from "react";
import { Card, CardContent, Grid, Rating, Badge } from "@mui/material";

export const EshoppItem = ({ prod }) => {
  return (
    <div>
      <Card className="prodcard">
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Badge badgeContent={`$ ${prod.price}`} color="secondary">
                <h3>
                  {prod.title.substr(0, 20)} {prod.title.length > 28 && "..."}
                </h3>
              </Badge>
            </Grid>
            <Grid item xs={6}>
              
              <p> {prod.description.substr(0, 100)}...</p>
            </Grid>
            <Grid item xs={6}>
            <img src={prod.image} alt="" className="prodimage" />
              <Badge badgeContent={prod.rating.count} color="primary" max={1000}>
                <Rating value={prod.rating.rate} />
              </Badge>
              
              <h4>{prod.category}</h4>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
