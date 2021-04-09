import React from "react";
import "./header.css";


import NewHeader from "../newHeader/NewHeader";
const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>Food Recipes ... </h1>
      </div>

      <div className="icons-header">
      <NewHeader  changeType={(type)=>props.changeType(type)} changeText={(text)=>props.changeText(text)}/>
        
      </div>
    </div>
  );
};

export default Header;
