import React from 'react';
import classes from './SideBar.module.scss';
import userStore from '../../store/userStore';
import school_logo from '../../images/icons/school_logo.png';
import { allowedSideBarListItems } from './allowedSideBarListItems';

export const SideBar = () => {
  const { type } = userStore.getUserData();

  const setActiveClass = ({ isActive }) => {
    return isActive ? classes.Active : '';
  };

  return (
    <div className={classes.SideBar}>
      <div className={classes.Logo}>
        <div className={classes.Img} style={{ backgroundImage: `url(${school_logo})` }}></div>
      </div>

      <menu className={classes.Menu}>{allowedSideBarListItems[type](type, setActiveClass)}</menu>
    </div>
  );
};
