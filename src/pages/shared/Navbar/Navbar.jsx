import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  //checking the stored theme in the localStorage by themeChange() &
  const storedTheme = localStorage.getItem("theme");
  let theme;
  if (storedTheme == "dark") {
    theme = true;
  } else {
    theme = false;
  }
  //then setting the boolean value of isDarkMode accordingly
  const [isDarkMode, setDarkMode] = useState(theme);

  const toggleDarkMode = () => {
    //same thing like above, but for every button press
    const storedTheme = localStorage.getItem("theme");
    // console.log(theme);
    if (storedTheme == "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  const navItems = (
    <>
      <li>
        <Link className="font-semibold text-lg" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-lg" to={"/about"}>
          About
        </Link>
      </li>
      {user?.email ? (
        <li>
          <Link onClick={logOut} className="font-semibold text-lg">
            Log Out
          </Link>
        </li>
      ) : (
        <li>
          <Link className="font-semibold text-lg" to={"/login"}>
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 py-0 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link>
          <img src={logo} alt="" className="w w-48" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <DarkModeSwitch
          data-toggle-theme="dark,retro"
          data-act-class="ACTIVECLASS"
          className="mx-3 mt-7"
          style={{ marginBottom: "2rem" }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
        />
        <button className="btn btn-outline">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
