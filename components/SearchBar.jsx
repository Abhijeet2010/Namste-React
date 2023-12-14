import React from "react";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <h4>Seach Restrurent Here</h4>
      <form>
        <input type="text" placeholder="Search here" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
