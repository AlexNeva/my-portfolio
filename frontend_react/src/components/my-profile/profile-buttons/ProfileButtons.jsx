import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import { BsTelegram, BsWhatsapp } from 'react-icons/bs';
import classes from './ProfileButtons.module.scss';

export const ProfileButtons = forwardRef(({ }, ref) => {
  return (
    <div ref={ref} className={classes.ProfileBtns}>

      <a download="" href="/assets/front-dev.pdf" className="button">
        Download CV <i className="ri-download-line"></i>
      </a>

      <div className={classes.ProfileSmallBtns}>

        <a
          href="https://api.whatsapp.com/send?phone=79516653214"
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes.Messanger} button button__small button__gray`}
        >
          <BsWhatsapp />
        </a>

        <a
          href="https://t.me/XandrNew"
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes.Messanger} button button__small button__gray`}
        >
          <BsTelegram />
        </a>
      </div>
    </div>
  )
})

export const MProfileButtons = motion(ProfileButtons);
