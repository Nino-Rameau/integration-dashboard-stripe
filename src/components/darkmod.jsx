import { useState, useEffect } from "react";

function Darkmod() {
  const [darkMode, setDarkMode] = useState(true); 

  useEffect(() => {
    if (darkMode) {                                             
      document.documentElement.classList.add("dark");           
      localStorage.setItem("theme", "dark");                
    } else {                                               
      document.documentElement.classList.remove("dark");       
      localStorage.setItem("theme", "light");                   
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];                
}

export default Darkmod;