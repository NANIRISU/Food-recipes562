import React from "react";
import "./SideMenu.css";
import { FiPlayCircle } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
const navItems = [
  {
    name: "My Books",
    icon: <FiPlayCircle />,
  },
  {
    name: "Add New Books",
    icon: <IoIosAddCircleOutline />,
  },
];
const SideMenu = () => {
  // const location=useLocation();
  return (
    <div className="sidemenu-container">
      <div className="logo-container">
        <h3>Library</h3>
      </div>
      <div className="book-section">
      <div className="books">
        <FiPlayCircle />
        <label>My Books</label>
        
      </div>
      <div className="added-book">
      <IoIosAddCircleOutline />
        <label>Add New Books</label>
      </div>
      </div>
      <div className="settings-container">
        <h3>Settings</h3>
      </div>
    </div>
  );
};

export default SideMenu;
