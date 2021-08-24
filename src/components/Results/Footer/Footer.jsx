import React from "react";
import rightRow from "../../../rewards-store/assets/icons/arrow-right.svg";
import leftRow from "../../../rewards-store/assets/icons/arrow-left.svg";

function Footer(props) {

    return (
        <div className="footer">
            <h4 className="quantity2">X de X productos</h4>
            <div className="rows2">
                <button className="leftButton2" type="submit">
                    <img src={leftRow} alt="Left row" />
                </button>
                <button className="rightButton2" type="submit">
                    <img src={rightRow} alt="Right row" />
                </button>
            </div>
        </div>
    );
}

export default Footer;