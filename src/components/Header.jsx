import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header-div">
        <div className="menubar">
          <img src={require('../images/Menu.png')} height='80%' width='80%' alt=""/>
        </div>
        <div className="logo">BUDGET BUDDY</div>
        <div className="notification"> 
          <img src={require('../images/Notification.png')} height='80%' width='80%'alt=""/>
        </div>
    </div>
  )
}

export default Header;
