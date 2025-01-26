import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/project.scss';

import image1 from "../../public/furniture.png"

const projects = [
  {
    id: 1,
    title: 'PLANTERS',
    description: "FRP and GRC planters are durable, weather-resistant, and stylish options for any space. FRP offers a lightweight, sleek look, while GRC combines concrete strength with reduced weight and eco-friendly materials. Both add elegance and versatility indoors or outdoors.",
    name: 'explore',
    image: "mobile2.png",
    description1: 'we live lit',
    route: '/test-comp'
  },
  {
    id: 2,
    title: "DESK PLANTERS",
    description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to',
    name: 'explore',
    image: 'mobile1.png',
    description1: 'we live lit',
    route: '/test-comp'
  },
  {
    id: 3,
    title: "BREEZE BLOCKS",
    description: "Timeless and versatile, Breeze Blocks combine functionality with striking aesthetics. Made from durable concrete, these decorative blocks feature iconic geometric patterns that enhance airflow and natural light. A standout element in modern architecture, they add character to both interior and exterior spaces.",
    name: 'explore',
    image: 'mobile5.png',
    description1: 'we live lit',
    route: '/test-comp2'
  },
  {
    id: 4,
    title: 'FURNITURE',
    description: "Polished terrazzo table tops with customizable concrete color, chip size, and thickness (20mm to 40mm). Durable, easy to maintain, and reinforced with fiberglass mesh for added strength. Water, moss, and stain-resistant. Available in diameters from 1.5' to 8. Bases can be customized in MS, SS, or wood to suit customer preferences.",
    name: 'explore',
    image: 'mobile6.png',
    description1: 'we live lit',
    route: '/test-comp4'
  },
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
          className={`project-card bg-${project.id}`} 
        >
        
      
           
        
          <h2 className='title'>{project.title}</h2>
          <p className='des'>{project.description}</p>
          <a href = {project.route}>
          <img src= {project.image}  className='proj-img'/>
          </a>
          <a href={project.route}>
          <span className='name'>{project.name}</span>
          </a>
         
          <p className='desc-1'>{project.description1}</p>
          <p className='desc-2'>{project.description1}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;