import React, { useState } from "react";

import Header from "../Header/Header";
import Library from "../library/Library";

import "./Main.css";
const Main = () => {
  const [showtype, setshowtype] = useState("grid");
  const [searchText, setSearchText] = useState("");
  const changeType = (type) => {
    console.log("function", type);
    setshowtype(type);
  };
  const changeText = (text) => {
    // console.log("function",text)
    setSearchText(text);
  };

  return (
    <div className="main-container">
      <Header
        changeType={(type) => changeType(type)}
        changeText={(text) => changeText(text)}
      />
      <Library type={showtype} text={searchText} />
      
    </div>
  );
};

export default Main;
