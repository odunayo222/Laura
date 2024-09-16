import React from 'react';
import CustomHeader from './components/CustomHeader';
import Navbar from './components/Navbar';
import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
      <Navbar />
      <CustomHeader />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
