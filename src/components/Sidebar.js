import React, { useState } from "react";
import { Avatar, IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        className="sidebar_compose"
        startIcon={<AddIcon />}
        fontSize="large"
      >
        Compose
      </Button>
    </div>
  );
}

export default Sidebar;
