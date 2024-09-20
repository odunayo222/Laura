import React from 'react';
import CustomHeader from './components/CustomHeader';
import Navbar from './components/Navbar';
import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scroll from './components/Scroll'
function App() {
  return (
    <div className="App">
      <Navbar />
      <CustomHeader />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Scroll />
      <Footer />
    </div>
  );
}

export default App;
