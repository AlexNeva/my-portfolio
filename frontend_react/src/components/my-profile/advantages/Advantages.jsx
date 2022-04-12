import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import classes from './Advantages.module.scss';

export const Advantages = forwardRef(({ ...props }, ref) => {
  return (
    <div ref={ref} className={`${classes.ProfileInfo} grid`}>
      <div className={classes.InfoGroup}>
        <h3 className={classes.InfoNumber}>2</h3>
        <p className={classes.InfoDescr}>
          Years of <br /> work
        </p>
      </div>
      <div className={classes.InfoGroup}>
        <h3 className={classes.InfoNumber}>+100</h3>
        <p className={classes.InfoDescr}>
          Completed <br /> projects
        </p>
      </div>
      <div className={classes.InfoGroup}>
        <h3 className={classes.InfoNumber}>+20</h3>
        <p className={classes.InfoDescr}>Satisfied <br /> customers</p>
      </div>
    </div>
  )
})

export const MAdvantages = motion(Advantages);
