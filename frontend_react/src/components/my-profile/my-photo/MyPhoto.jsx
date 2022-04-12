import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import photo from '../../../assets/myphoto2.png';
import classes from './MyPhoto.module.scss';

export const MyPhoto = forwardRef(({ ...props }, ref) => {
  return (
    <div ref={ref} className={classes.Border}>
      <div className={classes.Perfil}>
        <img src={photo} alt="my personal photo" />
      </div>
    </div>
  )
})

export const MMyPhoto = motion(MyPhoto);
