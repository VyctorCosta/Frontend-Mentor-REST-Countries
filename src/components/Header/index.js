import React from "react";

function Header() {
    return (
        <div className="navbar">
            <h1>Where in the world?</h1>

            <div className="darkmode">
                <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-moon-weather-dreamstale-lineal-dreamstale-6.png"/>
                <h3>Dark Mode</h3>
            </div>
            <style jsx>{`
                .navbar {
                    background-color: white;
                
                    padding-left: 50px;
                    padding-right: 50px;
                
                    display: flex;
                    flex-direction: row;
                
                    text-align: center;
                    align-items: center;
                    justify-content: space-between;
                
                    box-shadow: 5px 2px 2px 1px rgba(0, 0, 0, 0.2);
                
                }
                
                .darkmode {
                    display: flex;
                    flex-direction: row;
                    
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                }
                
                .darkmode img {
                    padding-right: 10px;
                }
            `}</style>
    </div>
    );
}

export default Header;