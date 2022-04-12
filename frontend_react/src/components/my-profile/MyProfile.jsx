import React from 'react';
import Advantages from './advantages/Advantages';
import MyPhoto from './my-photo/MyPhoto';
import ProfileButtons from './profile-buttons/ProfileButtons';
import SocialLinks from './social-links/SocialLinks';
import classes from './MyProfile.module.scss';

const MyProfile = () => {
  return (
    <div className={`${classes.ProfileContainer} grid`}>
      <div className={classes.ProfileData}>
        <MyPhoto />
        <h2 className={classes.ProfileName}>Alexandr Nevsky</h2>
        <h3 className={classes.ProfileProfession}>Frontend developer</h3>
        <SocialLinks />
      </div>
      <Advantages />
      <ProfileButtons />
    </div>
  )
}

export default MyProfile;
