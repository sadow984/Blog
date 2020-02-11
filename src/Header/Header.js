import React from 'react';
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
            <input type="text" value="Posts"></input>
          </div>
          <div className="SearchIcon">
            <MdSearch></MdSearch>
          </div>
        </div>
        <div className="Author">
          <h1>Author</h1>
        </div>
      </div>
    );
}

export default header;