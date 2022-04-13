import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsFillPlusCircleFill, BsLink45Deg } from 'react-icons/bs';
import classes from './ProjectCard.module.scss';

const cardAnimations = {
  hidden: {
    y: 25,
    opacity: 0,
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


const ProjectCard = (props) => {

  const [isActive, setActive] = useState(false);

  const clickHandler = () => {
    setActive((prev) => !prev);
  }

  return (
    <motion.article
      variants={cardAnimations}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2, once: true }}
      className={classes.ProjectsCard}
    >

      <img src={props.priviewUrl} alt="" className="projects__img" />

      <AnimatePresence>
        {
          isActive && (
            <motion.div
              className={classes.ProjectsOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.1,
                type: 'tween',
                ease: 'easeInOut'
              }}
            >
              <div>
                <span className={classes.ProjectSubtitle}>
                  {props.category}
                </span>
                <h3 className={classes.ProjectTitle}>
                  {props.name}
                </h3>
                <a
                  target='_blank'
                  rel="noopener"
                  href={props.link}
                  className={`${classes.ProjectsLink} button button__small`}
                >
                  <BsLink45Deg />
                </a>
              </div>
            </motion.div>
          )
        }

      </AnimatePresence>



      <button
        type='button'
        className={classes.CardBtn}
        onClick={clickHandler}
      >
        <span
          className={isActive && classes.RotateIcon}
        >
          <BsFillPlusCircleFill />
        </span>
      </button>
    </motion.article>
  )
}

export default ProjectCard;
