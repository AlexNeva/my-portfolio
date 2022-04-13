import React from 'react';
import classes from './SkillsItem.module.scss';

const SkillsItem = (props) => {
  return (
    <div className="skills__area">
      <h3 className={classes.SkillsTitle}>
        {props.typeDev}
      </h3>
      <div className={classes.SkillsBox}>
        {
          props.fields.map(field => (
            <div className={classes.SkillsData}>
              <i className="ri-checkbox-circle-line"></i>

              <div>
                <h3 className={classes.SkillsName}>
                  {field.name}
                </h3>
                <span className={classes.SkillsLevel}>
                  {field.level}
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SkillsItem;
