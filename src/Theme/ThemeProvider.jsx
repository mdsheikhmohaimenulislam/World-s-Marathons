import React, {  useState } from "react";
import { ThemeContext } from "./ThemeContext";


const ThemeProvider = ({ children }) => {


  //  getItem from localStorage on loader value
  const savedTheme = localStorage.getItem("theme")
  const [theme,setTheme]= useState(savedTheme)




//   toggle theme and save on localStorage
const handleToggleTheme = () => {
    const newTheme = theme === "dark"? "light" : "dark"
    setTheme(newTheme)
   localStorage.setItem("theme",newTheme)
};



 // ${theme === "dark"? "bg-gray-600" : "bg-base-300"}
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;