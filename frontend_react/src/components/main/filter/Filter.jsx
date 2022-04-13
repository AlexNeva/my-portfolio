import React, { useState } from 'react';
import classes from './Filter.module.scss';

const Filter = ({ filter, changeTab }) => {


  const setClass = (param) => {
    if (param) {
      return `${classes.FilterBtn} ${classes.FilterBtnActive}`
    }

    return `${classes.FilterBtn}`;
  }

  return (
    <div className={classes.Filter}>
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
    </div>
  )
}

export default Filter;
