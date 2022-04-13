import React from 'react';
import { motion } from 'framer-motion';
import classes from './Filter.module.scss';

const Filter = ({ filter, changeTab }) => {

  const filterAnimation = {
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


  const setClass = (param) => {
    if (param) {
      return `${classes.FilterBtn} ${classes.FilterBtnActive}`
    }

    return `${classes.FilterBtn}`;
  }

  return (
    <motion.div
      variants={filterAnimation}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2, once: true }}
      className={`${classes.Filter} filters__content`}
    >
      {
        filter.map((item, idx) => (
          <button
            key={item.title + idx}
            className={setClass(item.isActive)}
            onClick={() => changeTab(idx)}
          >
            {item.title}
          </button>
        ))
      }
    </motion.div>
  )
}

export default Filter;
