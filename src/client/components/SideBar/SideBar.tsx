import React from "react";
import classes from "./SideBar.module.scss";
import { NavLink } from "react-router-dom";
import userStore from "../../store/userStore";
import school_logo from "../../images/icons/school_logo.png";

export const SideBar = (props) => {
  const { type } = userStore;

  const setActiveClass = ({ isActive }) => {
    return isActive ? classes.Active : "";
  };

  return (
    <div className={classes.SideBar}>
      <div className={classes.Logo}>
        <div
          className={classes.Img}
          style={{ backgroundImage: `url(${school_logo})` }}
        ></div>
      </div>

      <menu className={classes.Menu}>
        <li>
          <NavLink to={`/${type}/teachers`} className={setActiveClass}>
            Учители
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${type}/pupils`} className={setActiveClass}>
            Ученики
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${type}/parents`} className={setActiveClass}>
            Родители
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${type}/classes`} className={setActiveClass}>
            Классы
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${type}/materials`} className={setActiveClass}>
            Материалы
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${type}/lessons`} className={setActiveClass}>
            Уроки
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${type}/school_subjects`} className={setActiveClass}>
            Предметы
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${type}/schedules`} className={setActiveClass}>
            Расписания
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${type}/diaries`} className={setActiveClass}>
            Дневники
          </NavLink>
        </li>
      </menu>
    </div>
  );
};
