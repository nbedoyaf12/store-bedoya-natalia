import React from "react";
import headerIcon from "../../rewards-store/assets/aerolab-logo.svg"


function Header(props) {

  return (
    <div className="header">
      <img src={headerIcon} ></img>
      <div className="userinfo">
        <div className="name">Name</div>
        <div className="points">
          6000 
        </div>
      </div>

    </div>
  );
}

export default Header;
