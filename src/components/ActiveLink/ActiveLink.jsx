import { NavLink } from "react-router-dom";
import "./ActiveLink.css";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "active w-full text-white my-3 p-3 rounded-md flex justify-between"
          : " hover:bg-base-300 w-full bg-base-100 my-3 p-3 rounded-md flex justify-between"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
