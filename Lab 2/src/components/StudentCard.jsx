import PropTypes from "prop-types";
import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";

function StudentCard({
  name,id,gpa,major,courses,isFavorite,onToggleFavorite,
}) 

{
  return (
    <div className="student-card">
    

      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Major: {major}</p>

    <StatBadge label="GPA" value={gpa} />

      <button onClick={() => onToggleFavorite(id)}>
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
    </button>

    <div className="course-list">
        {courses.map((course, index) => (
     <CourseTag key={index} courseName={course} color="#dbeafe" />
        ))}

      </div>
    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default StudentCard;