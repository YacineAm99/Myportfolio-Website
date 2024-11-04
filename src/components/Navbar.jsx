import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Yacine's Portfolio
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <button onClick={() => scrollToSection('about')} className="nav-link btn btn-link">
                About Me
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('projects')} className="nav-link btn btn-link">
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('contact')} className="nav-link btn btn-link">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
