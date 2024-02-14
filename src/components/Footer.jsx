import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-component">
      <Link to={"/"}>
        <button className="footer-home">
          <img src={require("../images/Home.png")} height="60%" width="60%" alt="" />
          Home
        </button>
      </Link>
      <Link to={"Input"}>
        <button className="footer-add add">ADD</button>
      </Link>
      <Link to={"Dashboard"}>
        <button className="footer-dashboard">
          <img src={require("../images/Dashboard.png" )}
            height="60%"
            width="40%"
            alt=""
          />
          Dashboard
        </button>
      </Link>
    </div>
  );
}

export default Footer;
