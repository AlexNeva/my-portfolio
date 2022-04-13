import React from 'react';
import classes from './MyProjects.module.scss';
import ProjectCard from './project-card/ProjectCard';



const MyProjects = () => {
  return (
    <div className={`${classes.Projects} grid`}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default MyProjects;
