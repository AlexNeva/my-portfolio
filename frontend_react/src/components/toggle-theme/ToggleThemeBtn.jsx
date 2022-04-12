import React, { useState } from 'react';
import classes from './ToggleTheme.module.scss';
import { BsMoonStars, BsSun } from 'react-icons/bs';

const ToggleThemeBtn = () => {

  const [dark, setDark] = useState(false);

  const clickHandler = () => {
    setDark((prev) => !prev)
  }

  return (
    <button
      className={classes.ToggleTheme}
      type='button'
      onClick={clickHandler}>
      {
        dark
          ?
          <BsSun />
          :
          <BsMoonStars />
      }
    </button>
  )
}

export default ToggleThemeBtn;
