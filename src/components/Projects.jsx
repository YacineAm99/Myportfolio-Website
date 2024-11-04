import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const projectList = [
    { id: 1, title: "TP#01", description: "TP1 is about creating a table and chairs using Blender." },
    { id: 2, title: "TP#02", description: "Description of Project 2" },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="mb-5">
      <h2>Blender Projects</h2>
      <div className="row">
        {projectList.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <Link
                  to={`/project/${project.id}`}
                  className="btn btn-primary"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
