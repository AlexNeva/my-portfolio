import React from 'react';
import { motion } from 'framer-motion';
import { BsCircle } from 'react-icons/bs';
import classes from './SkillsItem.module.scss';

const skillsItemAnimate = {
  hidden: {
    y: 25,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: 'tween',
      ease: 'easeOut'
    }
  }
}

const SkillsItem = (props) => {
  return (
    <motion.div
      variants={skillsItemAnimate}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2, once: true }}
    >
      <h3 className={classes.SkillsTitle}>
        {props.typeDev}
      </h3>
      <div className={classes.SkillsBox}>
        {
          props.fields.map((field, idx) => (
            <div
              key={field.name + idx}
              className={classes.SkillsData}
            >
              <div className={classes.SkillsIcon}>
                <BsCircle />
              </div>

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
    </motion.div>
  )
}

export default SkillsItem;
