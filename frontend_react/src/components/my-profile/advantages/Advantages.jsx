import React from 'react';
import classes from './Advantages.module.scss';

const Advantages = () => {
  return (
    <div className={`${classes.ProfileInfo} grid`}>
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
}

export default Advantages;
