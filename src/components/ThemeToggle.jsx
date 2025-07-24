import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(true);

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

    console.log(isDarkMode);

    const themeHandler = () => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    };

    return (
        <button onClick={() => themeHandler} className="z-50 fixed top-10 left-20">
            {isDarkMode ? (
                <Sun className="w-13 h-13 text-yellow-400" />
            ) : (
                <Moon className="w-13 h-13 text-slate-500" />
            )}
        </button>
    )
}

export default ThemeToggle
