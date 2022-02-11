import React from 'react';

async function getInfoApi(setArrayCountries, name, region) {
    const response = await fetch(`/api/home?name=${name}&region=${region}`);
    const array = await response.json();
    setArrayCountries(array);
}

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [arrayCountries, setArrayCountries] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");
    const [region, setRegion] = React.useState("");
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <AuthContext.Provider value={{
            inputValue,
            setInputValue,
            region,
            setRegion,
            arrayCountries,
            setArrayCountries,
            getInfoApi,
            darkMode,
            setDarkMode
            }
        }>
            {props.children}
        </AuthContext.Provider>
    )
}