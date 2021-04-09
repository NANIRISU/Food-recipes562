import React from "react";
import Input from "../input/Input";
import { FiSearch } from "react-icons/fi";
import { FiAlignCenter } from "react-icons/fi";
import { BsFillGridFill } from "react-icons/bs";

const NewHeader = (props) => {
  // console.log("hello",props.type)
  // console.log("type",props.changeType("list"))
  return (
    <header className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <div className="action-container">
          <BsFillGridFill onClick={() => props.changeType("grid")} />
          <FiAlignCenter onClick={() => props.changeType("list")} />
          <Input
            placeholder="Search...."
            icon={<FiSearch />}
            classes={{ inputComponentClass: "hover-action" }}
            onChange={(e) => props.changeText(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
