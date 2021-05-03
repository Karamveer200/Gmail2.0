import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import "./css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <div className="img">
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
            alt="logo"
          />
          <img className="imgsec" src="./gmail_logo.png" alt="logo" />
        </div>
      </div>
      <div className="headerMiddle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon />
      </div>
      <div className="headerRight">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
