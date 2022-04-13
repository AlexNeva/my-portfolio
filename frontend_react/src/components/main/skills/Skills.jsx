import React from 'react';
import classes from './Skills.module.scss';
import SkillsItem from './SkillsItem';

const Skills = () => {

  const skills = [
    {
      typeDev: 'Frontend',
      fields: [
        {
          name: 'HTML',
          level: 'Advanced',
        },
        {
          name: 'CSS',
          level: 'Advanced',
        },
        {
          name: 'JavaScript',
          level: 'Intermediate',
        },
        {
          name: 'React',
          level: 'Intermediate',
        },
        {
          name: 'Redux',
          level: 'Intermediate',
        },
        {
          name: 'Git',
          level: 'Intermediate',
        },
      ]
    },
    {
      typeDev: 'Backend',
      fields: [
        {
          name: 'Node js',
          level: 'Basic',
        },
        {
          name: 'PHP',
          level: 'Basic',
        },
        {
          name: 'Firebase',
          level: 'Basic',
        },
      ]
    },
  ]
  return (
    <div className={`${classes.Skills} grid`}>
      {
        skills.map(skill => (
          <SkillsItem
            {...skill}
          />
        ))
      }

    </div>
  )
}

export default Skills;
