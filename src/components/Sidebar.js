import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";

import "./css/Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button className="sidebar_compose" fontSize="large">
        <AddIcon />
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
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
