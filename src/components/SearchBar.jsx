import React from "react";

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="searchbar">
      <h4>Seach Restrurent Here</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search here" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
