import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/project.scss';

const projects = [
  {
    id: 1,
    title: 'PRODUCTS',
    description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to',
    name: 'explore',
    image: '/homedeco.png',
    description1: 'we live lit',
    route: '/products'
  },
  {
    id: 2,
    title: "PLANTER'S",
    description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to',
    name: 'explore',
    image: 'planter.png',
    description1: 'we live lit',
    route: '/test-comp'
  },
  {
    id: 3,
    title: "WALL PANNEL'S",
    description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to',
    name: 'explore',
    image: 'wallpanel.png',
    description1: 'we live lit',
    route: '/test-comp2'
  },
  {
    id: 4,
    title: 'FURNITURE',
    description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to',
    name: 'explore',
    image: 'furniture.png',
    description1: 'we live lit',
    route: '/test-comp4'
  },
];

const ProjectCard = ({ project, ref, onClick }) => (
  <div
    ref={ref}
    className="project-card"
    onClick={onClick}
  >
    <div className="content-top">
      <h2 className='title'>{project.title}</h2>
      <p className='des'>{project.description}</p>
    </div>
    
    <div className="content-middle">
      <img src={project.image} alt={project.title} className='proj-img'/>
    </div>
    
    <div className="content-bottom">
      <span className='name'>{project.name}</span>
      <p className='desc-1'>{project.description1}</p>
    </div>
  </div>
);

const Project = () => {
  const navigate = useNavigate();
  const projectRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const index = projectRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          if (index > 0) {
            projectRefs.current[index - 1].classList.add('fade-out');
          }
        } else {
          entry.target.classList.remove('show');
          if (index > 0) {
            projectRefs.current[index - 1].classList.remove('fade-out');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="projects-container" id="project">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          ref={(el) => (projectRefs.current[index] = el)}
          onClick={() => handleCardClick(project.route)}
        />
      ))}
    </div>
  );
};

export default Project;