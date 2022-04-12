import React from 'react';
import ToggleThemeBtn from '../toggle-theme/ToggleThemeBtn';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={`${classes.Header} container`}>
      <ToggleThemeBtn />
    </header>
  )
}

export default Header;
