import React, { useState } from "react";
import "./sidebar.css";

function Sidebar() {
  const [background, setBackground] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState("hidden");

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // const colour = background === "blue" ? "red" : "blue";
    // setBackground(colour);
    // style={{ background: background }}
  };

  return (
    <div className="sidebar-component" >
      <div
        className="sidebar-div"
        style={{ display: isSidebarOpen ? "block" : "none" }}
      >
        <div className="user-details">
          <div className="user-photo"></div>
          <div className="username-div"> Rajnish Bansal</div>
        </div>
        <div className="sidebar-items-div">
          <div className="sidebar-items">Profile</div>
          <div className="sidebar-items">Settings</div>
          <div className="sidebar-items">Backup</div>
          <div className="sidebar-items">Help</div>
          <div className="sidebar-items">Logout</div>
        </div>
      </div>
      <div className="temporary-div"></div>

      <button className="sidebar-button" onClick={handleMenuClick}>
        Button
      </button>
    </div>
  );
}

export default Sidebar;

// {isSidebarOpen ? (
//     <div className="sidebar sidebar-open">
//       <div className="sidebar-items">Profile</div>
//       <div className="sidebar-items">Settings</div>
//       <div className="sidebar-items">Backup</div>
//       <div className="sidebar-items">Help</div>
//       <div className="sidebar-items">Logout</div>
//     </div>
//   ) : (
//     <div className="sidebar">
//       <div className="sidebar-items">Profile</div>
//       <div className="sidebar-items">Settings</div>
//       <div className="sidebar-items">Backup</div>
//       <div className="sidebar-items">Help</div>
//       <div className="sidebar-items">Logout</div>
//     </div>
//   )}
