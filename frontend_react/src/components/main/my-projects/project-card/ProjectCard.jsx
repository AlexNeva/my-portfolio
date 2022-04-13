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


const ProjectCard = () => {

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

      <img src="https://super-krasota.ru/wp-content/uploads/2019/04/17bac04a49da4e3cea95068e60ca5518.jpg" alt="" className="projects__img" />

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
                <span className={classes.ProjectSubtitle}>Web</span>
                <h3 className={classes.ProjectTitle}>Payment Site</h3>
                <a href="#"
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
