import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  // Using state to store student information
  const [studentInfo] = React.useState({
    college: "George Brown College, Toronto",
    studentId: "101491591",
    studentName: "Parsa Mollahoseini",
    course: "COMP 3123 - Full Stack Development I"
  });

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Fullstack Development - I</h1>
          <h2>React JS Programming Week09 Lab exercise</h2>

          <div className="student-info">
            <p>{studentInfo.studentId}</p>
            <p>{studentInfo.studentName}</p>
            <p>{studentInfo.course}</p>
            <p>{studentInfo.college}</p>
          </div>
        </header>
      </div>
  );
}

export default App;