import React from "react";
import Button from "./Button/Button";
import buttonNames from "./data";
import rightRow from "../../../rewards-store/assets/icons/arrow-right.svg";
import leftRow from "../../../rewards-store/assets/icons/arrow-left.svg";


function Filters(props) {  


  return (
    <div className="filters">
      <div className="buttonFilters">
        <h4 className="quantity">X de X productos</h4>
        <h4 className="sort">Sort by:</h4>

        <Button
          names={buttonNames} />

      </div>
      <div className="rows">
        <button className="leftButton" type="submit">
          <img src={leftRow} alt="Left row" />
        </button>
        <button className="rightButton" type="submit">
          <img src={rightRow} alt="Right row" />
        </button>
      </div>
    </div>
  );
}

export default Filters;
