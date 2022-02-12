import React from 'react';

import Themes from "../themes";

const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [arrayCountries, setArrayCountries] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");
    const [region, setRegion] = React.useState("america");
    const [darkMode, setDarkMode] = React.useState(false);
    const [theme, setTheme] = React.useState(Themes.light)
    
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        setTheme(theme === Themes.light ? Themes.dark : Themes.light);
    }

    return (
        <AuthContext.Provider value={{
            arrayCountries,
            setArrayCountries,
            inputValue,
            setInputValue,
            region,
            setRegion,
            theme,
            darkMode,
            toggleTheme
            }
        }>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext);