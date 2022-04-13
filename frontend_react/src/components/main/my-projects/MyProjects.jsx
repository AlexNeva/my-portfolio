import React from 'react';
import classes from './MyProjects.module.scss';
import ProjectCard from './project-card/ProjectCard';



const MyProjects = () => {


  const projectsData = [
    {
      category: 'Website',
      name: 'EKTA-extreme',
      priviewUrl: 'http://alexneva.ru/portfolio-preview/EXTREM.jpg',
      link: '/EXTREM',
    },
    {
      category: 'Website',
      name: 'EKTA-travel',
      priviewUrl: 'http://alexneva.ru/portfolio-preview/ekta-travel.jpg',
      link: 'https://ektatraveling.com',
    },
    {
      category: 'Website',
      name: 'EKTA-digital',
      priviewUrl: 'http://alexneva.ru/portfolio-preview/travel-broker.jpg',
      link: '/EKTA/insurance-broker',
    },
    {
      category: 'Website + blog',
      name: 'Huishunters',
      priviewUrl: 'http://alexneva.ru/portfolio-preview/huishunter.jpg',
      link: 'https://huishunters.nl/',
    },
    {
      category: 'Web app',
      name: 'Todo list',
      priviewUrl: 'http://alexneva.ru/portfolio-preview/todo-app.jpg',
      link: 'https://beautiful-todo.web.app/',
    },
  ]

  return (
    <div className={`${classes.Projects} grid`}>
      {
        projectsData.map(project => (
          <ProjectCard {...project} />
        ))
      }
    </div>
  )
}

export default MyProjects;
