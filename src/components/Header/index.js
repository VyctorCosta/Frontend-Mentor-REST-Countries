import React from "react";
import Style from './header.module.css'
import { AuthContext } from "../../providers/auth";

function Header() {
    const { darkMode, setDarkMode } = React.useContext(AuthContext);

    return (
        <div className={darkMode ? Style.navbarDark : Style.navbar}>
            <h1>Where in the world?</h1>

            <div className={darkMode ? Style.darkModeButtonDark : Style.darkModeButtonLight}
            onClick={() => {
                setDarkMode(!darkMode);
            }}
            >
                <img src={darkMode ? "/img/moonDark.png" : "/img/moon.png"}/>
                <h3>Dark Mode</h3>
            </div>
    </div>
    );
}

export default Header;