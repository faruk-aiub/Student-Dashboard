import "./App.css";
import students from "./data/students";
import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div className="app">
      <DashboardHeader
        title="Student Dashboard"
        totalStudents={students.length}
      />

  <div className="student-list">
    {students.map((student) => (
       <StudentCard
          key={student.id}

             name={student.name}
          id={student.id}
          gpa={student.gpa}
          major={student.major}
      courses={student.courses}
            />
        ))}
      </div>
    </div>
  );
}

export default App;