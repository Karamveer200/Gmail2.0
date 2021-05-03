import React from "react";
import "./css/SidebarOption.css";

function SidebarOption({ Icon, title, Number, Selected }) {
  return (
    <div className={`sidebarOption ${Selected && "sidebarOption_active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{Number}</p>
    </div>
  );
}

export default SidebarOption;
