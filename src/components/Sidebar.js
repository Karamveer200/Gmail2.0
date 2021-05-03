import React, { useState } from "react";
import { Avatar, IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import "./css/Sidebar.css";
import SidebarOption from "./SidebarOption";

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
      <SidebarOption Icon={InboxIcon} title="Inbox" Number={52} />
    </div>
  );
}

export default Sidebar;
