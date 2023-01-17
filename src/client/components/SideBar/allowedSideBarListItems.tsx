import { NavLink } from 'react-router-dom';

export const allowedSideBarListItems = {
  admin: (type, setActiveClass) => (
    <>
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
    </>
  ),
  teacher: (type, setActiveClass) => (
    <>
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
    </>
  ),
};
