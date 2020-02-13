import React from "react";
import classes from "./Header.css";
import { MdSearch } from "react-icons/md";
const header = props => {
  return (
    <div className="Header">
      <div className="Logo">
        <h1>Blog</h1>
      </div>
      <div className="Search">
        <div className="Bar">
          <input type="text" className="InBar" value="Posts"></input>
        </div>
        <div className="SearchIcon">
          <button type="submit" class="searchButton">
            <i>
              <MdSearch></MdSearch>
            </i>
          </button>
        </div>
      </div>
      <div className="Author">
        <h4>Author</h4>
      </div>
    </div>
  );
};

export default header;
