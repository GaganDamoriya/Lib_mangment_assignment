import { useState } from "react";
import "./searchbar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ updateQuery }) => {
  const handleChange = (e) => {
    updateQuery(e.target.value);
  };

  return (
    <div className="searchbox">
      <FaSearch color="orange" />
      <input
        type="text"
        placeholder="Enter the book name"
        onChange={handleChange}
        onKeyDown={(e) => (e.target.value == "Enter" ? fx : {})}
      />
    </div>
  );
};

export default SearchBar;
