import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeHandler = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };


  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="">
      <div className='flex justify-end items-center gap-7 py-2 px-10 sm:px-16 md:px-27 fixed top-0 left-0 right-0 lg:justify-start lg:pt-12'>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.02 4.06" fill="currentColor" className="w-23 h-23 text-foreground lg:hidden">
          <path d="M5.44,7V8.13a.8.8,0,0,1-.79.79H2.16a.79.79,0,0,1-.78-.79V5.64a.78.78,0,0,1,.78-.78H4.65a.79.79,0,0,1,.79.78V6.82h-2V6.21a.07.07,0,0,0-.14,0V7.56a.07.07,0,0,0,.14,0V7ZM8.92,5.64V8.13a.79.79,0,0,1-.78.79H5.65a.78.78,0,0,1-.31-.07.85.85,0,0,0,.27-.61V5.54a.87.87,0,0,0-.27-.62.78.78,0,0,1,.31-.06H8.14A.78.78,0,0,1,8.92,5.64ZM7,6.21a.07.07,0,1,0-.14,0V7.56a.07.07,0,0,0,.14,0Zm5.44-.57V8.13a.8.8,0,0,1-.79.79H8.67a.84.84,0,0,0,.43-.71V5.57a.82.82,0,0,0-.43-.71h2.94A.79.79,0,0,1,12.4,5.64Zm-1,.57a.07.07,0,1,0-.14,0V7.56a.07.07,0,1,0,.14,0Z" transform="translate(-1.38 -4.86)" />
        </svg>
        <button onClick={themeHandler} className="cursor-pointer lg:">
          {isDarkMode ? (
            <Sun className="w-9 h-9 text-yellow-400" />
          ) : (
            <Moon className="w-9 h-9 text-slate-500" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar
