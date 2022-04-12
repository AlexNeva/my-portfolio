import React from 'react';
import { motion } from 'framer-motion';
import { MAdvantages } from './advantages/Advantages';
import { MMyPhoto } from './my-photo/MyPhoto';
import { MProfileButtons } from './profile-buttons/ProfileButtons';
import SocialLinks from './social-links/SocialLinks';
import classes from './MyProfile.module.scss';

const animationSettings = {
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

const MyProfile = () => {
  return (
    <motion.div
      transition={
        { staggerChildren: 0.3, }
      }
      initial='hidden'
      whileInView='visible'

      className={`${classes.ProfileContainer} grid`}
    >
      <div className={classes.ProfileData}>
        <MMyPhoto
          variants={animationSettings}
        />
        <motion.h2
          variants={animationSettings}
          className={classes.ProfileName}
        >
          Alexandr Nevsky
        </motion.h2>
        <motion.h3
          variants={animationSettings}
          className={classes.ProfileProfession}
        >
          Frontend developer
        </motion.h3>
        <SocialLinks />
      </div>
      <MAdvantages variants={animationSettings} />
      <MProfileButtons variants={animationSettings} />
    </motion.div>
  )
}

export default MyProfile;
