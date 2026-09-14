import { useState } from 'react';
import projectsData from '../../data/projects.json';
import './ProjectsGallery.css';

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    // Detail View
    return (
      <div className="project-detail-container">
        <button 
          className="back-button" 
          onClick={() => setSelectedProject(null)}
        >
          &#8592; Back to Projects
        </button>
        <div className="project-detail-content">
          <h2 className="project-detail-title">{selectedProject.title}</h2>
          
          <div className="project-detail-body">
            <div className="project-detail-text">
              {selectedProject.description.split('\n\n---')[0].split('\n').map((para, i) => (
                para.trim() && <p key={i}>{para}</p>
              ))}
            </div>
            
            <div className="project-detail-images">
              {selectedProject.images.map((img, i) => (
                <img key={i} src={img} alt={`${selectedProject.title} ${i}`} className="detail-image" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="projects-gallery-container">
      <h2 className="gallery-title">PROJECTS ARCHIVE</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-card-image-wrapper">
              {project.coverImage ? (
                <img src={project.coverImage} alt={project.title} className="project-card-image" />
              ) : (
                <div className="project-card-placeholder">NO IMAGE</div>
              )}
              <div className="project-card-overlay">
                <span className="view-text">VIEW PROJECT</span>
              </div>
            </div>
            <div className="project-card-info">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-excerpt">{project.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
