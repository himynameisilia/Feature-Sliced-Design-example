import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from "./ThemeContext";
import { useContext } from "react";

interface IUseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        localStorage.setItem(LOCAL_STORAGE_THEME, newTheme)
        setTheme(newTheme);
    };

    return { theme, toggleTheme }
}