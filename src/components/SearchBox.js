import React from "react";
import "./SearchBox.css";

const SearchBox = ({ value, searchChange }) => {
  return (
    <>
      <div className="search_container">
        <input
          type="text"
          value={value}
          onChange={searchChange}
          placeholder="Search robot..."
        />
      </div>
    </>
  );
};

export default SearchBox;
