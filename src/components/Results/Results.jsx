import React from "react";
import Products from "./Products/Products";
import Filters from "./Filters/Filters";
import Footer from "./Footer/Footer";


function Results(props) {

  return (
    <div className="results">
      <Filters />
      <Products />
      <Footer/>
    </div>
  );
}

export default Results;
