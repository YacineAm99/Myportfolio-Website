import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';

function ProjectDetail() {
  const { id } = useParams(); // Capture the project ID from the URL

  let projectImage;
  if (id === '1') {
    projectImage = project1Image; // Show Project 1 image
  } else if (id === '2') {
    projectImage = project2Image; // Show Project 2 image
  } else {
    projectImage = ''; // Default or handle invalid project ID
  }
  return (
    <div>
      <header className="text-center my-4">
        <h2>TP#0{id} Details</h2>
        <p>A detailed look at the TP, including an image and a 3D model.</p>
      </header>
      <div className="project-content">
        <section className="image-section mb-4">
          <h3>TP Image</h3>
          {projectImage && ( // Only render the image if it exists
            <img src={projectImage} alt={`Project ${id}`} className="img-fluid" />
          )}
        </section>
        <section className="model-section">
          <h3>3D Model</h3>
          <div className="model-placeholder" style={{ width: '100%', height: '200px', background: '#eee' }}>
            {/* Placeholder for 3D model, no 3D functionality for now */}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetail;
