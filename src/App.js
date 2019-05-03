import React from 'react';
import Navbar from './components/Navbar.js'
import SchoolCard from './components/SchoolCard.js'
import data from './nycSchoolEnrollmentData.js'
import './App.css';

function App() {
  console.log(data)
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">

        </div>
      </div>
    </div>
  );
}

export default App;
