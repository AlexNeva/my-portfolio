import React from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import classes from './SocialLinks.module.scss';

const animateSocials = {
  hidden: {
    x: 10,
    y: 10,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,

  }
}

const SocialLinks = () => {
  return (
    <motion.ul
      transition={
        { staggerChildren: 0.3, }
      }
      initial='hidden'
      whileInView='visible'
      className={classes.Socials}
    >
      <motion.li
        className={classes.SocialsItem}
        variants={animateSocials}
      >
        <a href="https://www.instagram.com/sashnevski" rel="noopener noreferrer" target="_blank" className={classes.SocialsLink}>
          <BsInstagram />
        </a>
      </motion.li>
      <motion.li
        className={classes.SocialsItem}
        variants={animateSocials}
      >
        <a
          href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BD%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-0255a6203/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.SocialsLink}>
          <BsLinkedin />
        </a>
      </motion.li>
      <motion.li
        className={classes.SocialsItem}
        variants={animateSocials}
      >
        <a href="https://github.com/AlexNeva" rel="noopener noreferrer" target="_blank" className={classes.SocialsLink}>
          <BsGithub />
        </a>
      </motion.li>
    </motion.ul>
  )
}

export default SocialLinks;
