import React, { useEffect } from "react";
import styles from "./Body.module.css";
import { useRouter } from "next/router";
import { AuthContext } from "../../providers/auth";


function createElement(array, darkMode) {
    if (array.length === 0) return array;
    const arrayLi = [];
    const router = useRouter();
    let arrayDiv = [];
    let div;
    
    array.forEach((element, index) => {
        div = <div className={darkMode ? styles.countryBodyDark : styles.countryBody} key={index} onClick={(e) => {
            e.preventDefault();
            router.push({
                pathname: "/countries",
                query: {
                    name: element.name.common,
                    darkMode
                }
            })
        }}>
            <img src={element.flags.png} />
            <h2>{element.name.common}</h2>
            <p><b>Population:</b> {element.population}</p>
            <p><b>Region:</b> {element.region}</p>
            <p><b>Capital:</b> {element.capital !== undefined ? element.capital[0] : "No capital"}</p>
        </div>;
        arrayDiv.push(div);

        if (arrayDiv.length === 4) {
            arrayLi.push(<li className={styles.liBody} key={index*10}>{arrayDiv}</li>);
            arrayDiv = [];
        } else if (element === array[array.length-1]) arrayLi.push(<li className={styles.liBody} key={index*10}>{arrayDiv}</li>);
    })

    return arrayLi;
}

function Body() {
    const {arrayCountries, setArrayCountries, inputValue, region, getInfoApi, darkMode, setDarkMode} = React.useContext(AuthContext);
    const router = useRouter();
    const x = Boolean(router.query.darkMode)
    console.log(`boolean x: ${x}`)
    console.log(`router: ${router.query.darkMode}`)

    useEffect(() => {
        if (router.query.darkMode) setDarkMode(x);
        console.log("darkmode", darkMode)
        getInfoApi(setArrayCountries, inputValue, region)
    }, [])
    useEffect(() => {
        document.body.className = darkMode ? "Dark" : "Light";
    }, [darkMode])
    return (
        <>
            <ul className={styles.ulBody}>{createElement(arrayCountries, darkMode)}</ul>            
        </>
    );
}

export default Body;



