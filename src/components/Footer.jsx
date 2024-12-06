import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-component">
      <Link to={"/"} className="footer-home">
        <img
          className="home-img"
          src={require("../images/Home.png")}
          height="60%"
          width="60%"
          alt=""
        />
        Home
      </Link>

      <Link to={"Input"}>
        <button className="footer-add add">ADD</button>
      </Link>

      <Link to={"Dashboard"} className="footer-dashboard">
        <img className="dashboard-img"
          src={require("../images/Dashboard.png")}
          height="60%"
          width="40%"
          alt=""
        />
        Dashboard
      </Link>
    </div>
  );
}

export default Footer;
