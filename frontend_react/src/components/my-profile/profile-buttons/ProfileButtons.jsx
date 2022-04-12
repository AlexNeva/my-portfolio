import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import { BsTelegram, BsWhatsapp } from 'react-icons/bs';
import classes from './ProfileButtons.module.scss';

export const ProfileButtons = forwardRef(({ }, ref) => {
  return (
    <div ref={ref} className={classes.ProfileBtns}>

      <a download="" href="assets/pdf/Gianell-Cv.pdf" className="button">
        Download CV <i className="ri-download-line"></i>
      </a>

      <div className={classes.ProfileSmallBtns}>

        <a
          href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
          target="_blank"
          className={`${classes.Messanger} button button__small button__gray`}
        >
          <BsWhatsapp />
        </a>

        <a
          href="https://m.me/bedimcode"
          target="_blank"
          className={`${classes.Messanger} button button__small button__gray`}
        >
          <BsTelegram />
        </a>
      </div>
    </div>
  )
})

export const MProfileButtons = motion(ProfileButtons);
