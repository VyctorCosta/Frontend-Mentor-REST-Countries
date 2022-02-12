import React from "react";
import Style from "styled-components";
import { useAuth } from "../../providers/auth";

const NavBar = Style.div`
    background-color: ${({ theme }) => theme.elementsColor};
    color: ${({ theme }) => theme.textColor};
    padding: 30px 70px;
    

    display: flex;
    flex-direction: row;

    text-align: center;
    align-items: center;
    justify-content: space-between;

    font-family: 'Nunito Sans', sans-serif;

    width: auto;
`;


const DarkModeButton = Style.div`
    background-color: ${({ theme }) => theme.elementsColor};
    color: ${({ theme }) => theme.textColor};
    font-family: 'Nunito Sans', sans-serif;

    display: flex;
    flex-direction: row;

    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        padding-right: 10px;
    }
`;

function Header() {
    const { darkMode, toggleTheme } = useAuth();
 
    return (
        <NavBar>
            <h1>Where in the world?</h1>

            <DarkModeButton onClick={toggleTheme}>
                <img src={darkMode ? "/img/moonDark.png" : "/img/moon.png"}/>
                <h3>Dark Mode</h3>
            </DarkModeButton>
        </NavBar>
    );
}

export default Header;