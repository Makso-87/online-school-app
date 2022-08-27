import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, Navigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

export const NavBar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logOut();
    navigate("/", { replace: true });
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/pupils"}>Ученики</NavLink>
        </li>

        <li>
          <a href="/" onClick={logoutHandler}>
            Выйти
          </a>
        </li>
      </ul>
    </div>
  );
};
