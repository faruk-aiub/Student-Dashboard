import PropTypes from "prop-types";
import StatBadge from "./StatBadge";

function DashboardHeader({ title, totalStudents }) {
  return (
    <header className="header">
      <h1>{title}</h1>

    <nav>
    <a href="#">Home</a>
    <a href="#">Students</a>
    <a href="#">Courses</a>
    </nav>

  <StatBadge label="Total Students" value={totalStudents} />
    </header>
  );
}

DashboardHeader.propTypes = {

    title: PropTypes.string.isRequired,
  totalStudents: PropTypes.number.isRequired,
  
};

export default DashboardHeader;