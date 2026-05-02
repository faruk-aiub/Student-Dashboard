import PropTypes from "prop-types";

function SortControls({ setSortType }) {
  return (
    <div className="sort-controls">
      <button onClick={() => setSortType("default")}>Default</button>
      <button onClick={() => setSortType("name")}>Name</button>
      <button onClick={() => setSortType("gpa")}>GPA</button>
    </div>
  );
}

SortControls.propTypes = {
  setSortType: PropTypes.func.isRequired,
};

export default SortControls;