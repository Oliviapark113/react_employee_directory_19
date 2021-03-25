import React from "react";
import "./style.css";

function Title(props) {
  return (
   
  <nav className="navbar">
  <div className="container-fluid">
  <h1 className="title">{props.children}</h1>
  </div>
</nav>

   
 );
}

export default Title;