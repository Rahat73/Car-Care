/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeProvider = ({ children }) => {
  //making it the parent of all other components
  //as a result button press in child trigger themeChange() and applies it to all the childre
  useEffect(() => {
    themeChange(false);
  }, []);
  return <div>{children}</div>;
};

export default ThemeProvider;
