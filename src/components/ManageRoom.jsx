import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { AddRoom } from "./AddRoom";
import { RemoveRoom } from "./RemoveRoom";
import { MaintainanceofRoom } from "./MaintainanceOfRoom";

export const ManageRoom = () => {
  const [vals, setVals] = useState("addroom");
  const currUser = sessionStorage.getItem("username");
  const currcity = sessionStorage.getItem(" cityname");
  const currAge = localStorage.getItem("age");
  return (
    <React.Fragment>
      <h3>
        Welcome {currUser} - {currAge} to Manage Room from {currcity}
      </h3>
      <Tabs value={vals} onChange={(e,value) => setVals(value)}>
        <Tab value="addroom" label="Add Room" />
        <Tab value="removeroom" label="Remove Room" />
        <Tab value="maintainanceofroom" label="Maintainance Room" />
      </Tabs>

      {vals === "addroom" && <AddRoom />}
      {vals === "removeroom" && <RemoveRoom />}
      {vals === "maintainanceofroom" && <MaintainanceofRoom />}
    </React.Fragment>
  );
};
