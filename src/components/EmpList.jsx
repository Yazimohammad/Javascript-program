import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react"

export const EmpList = () => {
  const [empdata, setEmpdata] = useState([]);
  const getdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setEmpdata(result));
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="sub">
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Street</th>
          <th>Suite</th>
          <th>Zipcode</th>
          <th>City</th>
          <th>Latitude</th>
        </tr>
        {empdata.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.street}</td>
            <td>{item.address.suite}</td>
            <td>{item.address.zipcode}</td>
            <td>{item.address.city}</td>
            <td>{item.address.geo.lat}</td>
          </tr>
        ))}
      </table>
      
    </div>
  );
};
