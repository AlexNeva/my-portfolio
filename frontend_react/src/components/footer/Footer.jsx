import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${classes.Footer} container`}>
      <span className={`${classes.FooterCopy}`}>
        &#169; Alexandr Nevsky. All rigths reserved
      </span>
    </footer>
  )
}

export default Footer;
