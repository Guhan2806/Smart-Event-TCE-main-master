import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./search.css";

function Search() {
  return (
    <div>
      <div className="search">
        <AiOutlineSearch className="icon" />
        <input
          className="search-text"
          type="text"
          placeholder="Type to Search"
        />
      </div>
    </div>
  );
}

export default Search;
