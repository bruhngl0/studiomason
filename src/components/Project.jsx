import React, { useEffect, useState, useRef } from 'react';
import '../styles/project.scss';

const projects = [
  { id: 1, title: 'PRODUCTS', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'explore', image: 'homedeco.png', description1:'we live lit', description2: 'test description two' },
  { id: 2, title: "PLANTER'S", description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'explore', image: 'planter.png', description1:'we live lit', description2: 'test description two' },
  { id: 3, title: "WALL PANNEL'S", description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'explore', image: 'wallpanel.png', description1:'we live lit', description2: 'test description two' },
  { id: 4, title: 'FURNITURE', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'explore', image: 'furniture.png', description1:'we live lit', description2: 'test description two' },
  
];

const Project = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = projectRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          if (index > 0 ) {
            projectRefs.current[index - 1].classList.add('fade-out'); 
          
          }


        } else {
          entry.target.classList.remove('show');
          if (index > 0) {
            projectRefs.current[index - 1].classList.remove('fade-out');
            
          }
        }
      });
    }, options);

    if (projectRefs.current) {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (projectRefs.current) {
        projectRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className="projects-container" id="project">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          className="project-card"
        >
          <h2 className='title'>{project.title}</h2>
          <p className='des'>{project.description}</p>
          <span className='name'>{project.name}</span>
          <img src={project.image} alt={project.title} className='proj-img'/>
          <p className='desc-1'>{project.description1}</p>
          <p className='desc-2'>{project.description2}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;