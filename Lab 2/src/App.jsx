import { useEffect, useState } from "react";
import "./App.css";
import studentData from "./data/students";
import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [sortType, setSortType] = useState("default");



  useEffect(() => {
    setTimeout(() => {

      setStudents(studentData);
      setLoading(false);

    }, 1500);
  }, []);



  const handleFavorite = (id) => {
  if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
  } else {
      setFavorites([...favorites, id]);
    }
  };


  let filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase())
  );


  if (sortType === "name") {
    filteredStudents = [...filteredStudents].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortType === "gpa") {
    filteredStudents = [...filteredStudents].sort((a, b) => b.gpa - a.gpa);
  }

  useEffect(() => {
    document.title = `Dashboard - ${filteredStudents.length} Students`;
  }, [filteredStudents.length]);

  if (loading) {
    return <h2 className="loading">Loading students...</h2>;
  }


  return (
  <div className="app">
    <DashboardHeader

       title="Student Dashboard"
      totalStudents={filteredStudents.length}
      totalFavorites={favorites.length}
      />

      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <SortControls setSortType={setSortType} />



  <div className="student-list">
     {filteredStudents.map((student) => (
      <StudentCard
          key={student.id}
          name={student.name}
          id={student.id}
          avatar={student.avatar}
          gpa={student.gpa}
          major={student.major}
          courses={student.courses}
          isFavorite={favorites.includes(student.id)}
            onToggleFavorite={handleFavorite}
          />
          
        ))}
      </div>
    </div>
  );
}

export default App;