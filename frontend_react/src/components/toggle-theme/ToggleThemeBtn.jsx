import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/theme-context';
import classes from './ToggleTheme.module.scss';
import { BsMoonStars, BsSun } from 'react-icons/bs';

const ToggleThemeBtn = () => {

  const { isDark, setTheme } = useContext(ThemeContext);

  const themeToggler = () => {
    setTheme(prev => !prev)
  }

  return (
    <button
      className={classes.ToggleTheme}
      type='button'
      onClick={themeToggler}
    >
      {
        isDark
          ?
          <BsSun />
          :
          <BsMoonStars />
      }
    </button>
  )
}

export default ToggleThemeBtn;
