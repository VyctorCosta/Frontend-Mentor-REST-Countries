import React from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [inputValue, setInputValue] = React.useState("");
    const [region, setRegion] = React.useState("");

    return (
        <AuthContext.Provider value={{inputValue, setInputValue, region, setRegion}}>
            {props.children}
        </AuthContext.Provider>
    )
}