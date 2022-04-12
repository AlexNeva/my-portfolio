import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import classes from './SocialLinks.module.scss';

const SocialLinks = () => {
  return (
    <ul className={classes.Socials}>
      <li className={classes.SocialsItem}>
        <a href="https://www.instagram.com/sashnevski" target="_blank" className={classes.SocialsLink}>
          <BsInstagram />
        </a>
      </li>
      <li className={classes.SocialsItem}>
        <a href="https://www.linkedin.com/" target="_blank" className={classes.SocialsLink}>
          <BsLinkedin />
        </a>
      </li>
      <li className={classes.SocialsItem}>
        <a href="https://github.com/AlexNeva" target="_blank" className={classes.SocialsLink}>
          <BsGithub />
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks;
