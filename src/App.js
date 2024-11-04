import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <section id="about">
                  <About />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="contact">
                  <Footer />
                </section>
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
