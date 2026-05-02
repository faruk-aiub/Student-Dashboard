import PropTypes from "prop-types";

function SearchBar({ searchText, setSearchText }) {
  return (
<input

type="text"
placeholder="Search by name"
value={searchText}
onChange={(e) => setSearchText(e.target.value)}
className="search-input"
    />
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default SearchBar;