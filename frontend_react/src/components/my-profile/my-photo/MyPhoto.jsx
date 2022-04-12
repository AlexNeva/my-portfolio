import React from 'react';
import photo from '../../../assets/myphoto2.png';
import classes from './MyPhoto.module.scss';

const MyPhoto = () => {
  return (
    <div className={classes.Border}>
      <div className={classes.Perfil}>
        <img src={photo} alt="my personal photo" />
      </div>
    </div>
  )
}

export default MyPhoto;
