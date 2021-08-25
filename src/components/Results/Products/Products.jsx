import React from "react";
import Card from "./Card/Card";


function Products(props) {

  const headers={
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
  };


  
  return (
    <div className="products">
      <Card/>
     
    </div>
  );
}

export default Products;
