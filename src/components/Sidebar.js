import React, { useState } from "react";
import { Avatar, IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        Number={52}
        Selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" Number={52} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" Number={52} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" Number={52} />
      <SidebarOption Icon={NearMeIcon} title="Sent" Number={52} />
      <SidebarOption Icon={NoteIcon} title="Drafts" Number={52} />

      <SidebarOption Icon={ExpandMoreIcon} title="More" Number />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons"></div>
      </div>
    </div>
  );
}

export default Sidebar;
