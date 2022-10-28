import { Button } from "@mui/material";
import React from "react";

const NavBar = ({size}) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-md">
          <h1 className="navbar-brand">Navbar</h1>
          <form className="d-flex">
            <Button variant="contained" color="warning">Cart-  <span> {size}</span> </Button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
