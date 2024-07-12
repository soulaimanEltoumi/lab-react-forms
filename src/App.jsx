import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [program, setProgram] = useState("2023");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [graduated, setGraduated] = useState(false);

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handleProgram = (e) => {
    setProgram(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleGraduated = (e) => {
    setGraduated(e.target.checked);
  };
  const resetFormInputs = () => {
    setFullName("");
    setImage("");
    setProgram("2023");
    setEmail("");
    setPhone("");
    setGraduated(false);
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      fullName,
      image,
      program,
      email,
      phone,
      graduated,
    };
    setStudents([newStudent, ...students]);
    e.resetFormInputs();
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              onChange={handleFullName}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              onChange={handleImage}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={handlePhone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleEmail}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgram}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={handleGraduated}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              onChange={handleGraduated}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
