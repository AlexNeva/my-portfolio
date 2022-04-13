import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer class={`${classes.Footer} container`}>
      <span class={`${classes.FooterCopy}`}>
        &#169; Alexandr Nevsky. All rigths reserved
      </span>
    </footer>
  )
}

export default Footer;
