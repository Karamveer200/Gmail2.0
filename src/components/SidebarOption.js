import React from "react";
import "./css/SidebarOption.css";

function SidebarOption({ Icon, title, Number }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h3>{title}</h3>
      <p>{Number}</p>
    </div>
  );
}

export default SidebarOption;
