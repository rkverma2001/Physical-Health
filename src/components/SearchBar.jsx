import "../index.css";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search exercises..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
