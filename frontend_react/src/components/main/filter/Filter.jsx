import React, { useState } from 'react';
import classes from './Filter.module.scss';

const Filter = () => {

  const [filter, setFilter] = useState([
    {
      title: 'Projects',
      isActive: true,
    },
    {
      title: 'Skills',
      isActive: false,
    },
  ])


  const setClass = (param) => {
    if (param) {
      return `${classes.FilterBtn} ${classes.FilterBtnActive}`
    }

    return `${classes.FilterBtn}`;
  }

  const clickHandler = (id) => {
    setFilter((prev) => (
      prev
        .map((item, idx) => id === idx ? { ...item, isActive: true } : { ...item, isActive: false })
    ))
  }

  return (
    <div className={classes.Filter}>
      {
        filter.map((item, idx) => (
          <button
            key={item.title + idx}
            className={setClass(item.isActive)}
            onClick={() => clickHandler(idx)}
          >
            {item.title}
          </button>
        ))
      }
    </div>
  )
}

export default Filter;
