import React from "react";
import { useRouter } from "next/router";
import styles from "./Body.module.css";


function createElement(array) {
    if (array.length === 0) return array;
    const arrayLi = [];
    let arrayDiv = [];
    let div;
    
    array.forEach((element, index) => {
        div = <div className={styles.countryBody} key={index}>
            <img src={element.flags.png} />
            <h1>{element.name.common}</h1>
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

async function getInfoApi(setArrayCountries, name, region) {
    const response = await fetch(`/api/home?name=${name}&region=${region}`);
    const array = await response.json();
    setArrayCountries(array);
}


function Body() {
    const [arrayCountries, setArrayCountries] = React.useState([]);
    const [arrayUl, setArrayUl] = React.useState([]);
    const region = "asia";
    const name = "m".toLowerCase()
    getInfoApi(setArrayCountries, name, region)
    
    return (
        <>
            <ul>{createElement(arrayCountries)}</ul>            
        </>
    );
}

export default Body;



