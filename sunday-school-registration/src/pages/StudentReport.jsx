import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";
import "./StudentReport.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function StudentReport() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
      setFilteredStudents(data);
    } catch (err) {
      console.error(err);
      alert("Unable to load students.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value) => {
    setSearch(value);

    const filtered = students.filter((student) => {
      const studentName =
        `${student.student.firstName} ${student.student.lastName}`.toLowerCase();

      const parentName =
        `${student.parent1.firstName} ${student.parent1.lastName}`.toLowerCase();

      return (
        studentName.includes(value.toLowerCase()) ||
        parentName.includes(value.toLowerCase())
      );
    });

    setFilteredStudents(filtered);
  };

const navigate = useNavigate();

const logout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    navigate("/admin");
};

  if (loading) {
    return <h2>Loading students...</h2>;
  }

if (sessionStorage.getItem("adminLoggedIn") !== "true") {
    return <Navigate to="/admin" replace />;
}

  return (
    <div className="report-container">

<div className="report-header">
    <h1>📋 Student Registrations</h1>

    <button className="logout-btn" onClick={logout}>
        Logout
    </button>
</div>

      <input
        className="search-box"
        type="text"
        placeholder="Search student or parent..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <table className="student-table">

        <thead>
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Grade</th>
            <th>Gender</th>
            <th>Parent</th>
            <th>Mobile</th>
          </tr>
        </thead>

        <tbody>

          {filteredStudents.map((student, index) => (

            <tr key={student.id}>
              <td>{index + 1}</td>

<td>
    <Link to={`/students/${student.id}`}>
        {student.student.firstName} {student.student.lastName}
    </Link>
</td>

              <td>{student.student.schoolYear}</td>

              <td>{student.student.gender}</td>

              <td>
                {student.parent1.firstName} {student.parent1.lastName}
              </td>

              <td>{student.parent1.mobile}</td>

            </tr>

          ))}

        </tbody>

      </table>

      <p>
        Showing {filteredStudents.length} student(s)
      </p>

    </div>
  );
}

export default StudentReport;
