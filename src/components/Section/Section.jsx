import React from "react";
import sectionImage from "../../rewards-store/assets/header-x1.png";

function Section(props) {
  
  return (
    <div className="section">
     <img src={sectionImage} alt="section " />
     <h1>Electronics</h1>
    </div>
  );
}

export default Section;
