import React, { useState } from "react";
import "./Header.css";
import Sidebar from "./Sidebar";

function Header() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const handleMenuClick = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <div className="header-div">
      <div className="menubar">
        <button className="menu-button">
          <img
            className="menu-img"
            src={require("../images/Menu.png")}
            alt=""
          />
        </button>
      </div>
      <div className="logo">BUDGET BUDDY</div>
      <div className="notification">
        <img
          src={require("../images/Notification.png")}
          height="80%"
          width="80%"
          alt=""
        />
      </div>
      {/* {isSidebarOpen && <Sidebar />} */}
    </div>
  );
}

export default Header;
