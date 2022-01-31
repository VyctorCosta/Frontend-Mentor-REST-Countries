import React, { Component } from "react";
import { useRouter } from "next/router";
import styles from "./Body.module.css";

function returnUrl(region) {
    if (!region) return "https://restcountries.com/v3.1/all";

    return `https://restcountries.com/v3.1/region/${region}`
}

function returnUlTag(array, name) {
    const arrayLi = [];
    let arrayDivs = [];
    let div;

    if (name) {
        array = array.filter(element => element.name.common.toLowerCase().startsWith(name));
    }

    array.forEach((element, index) => {
        if (index !== 0 && index % 4 === 0) {
            arrayLi.push(<li className={styles.liBody} key={index*10}>{arrayDivs}</li>);
            arrayDivs = [];
        }

        div = <div className={styles.countryBody} key={index}>
            <img src={element.flags.png} />
            <h1>{element.name.common}</h1>
            <p><b>Population:</b> {element.population}</p>
            <p><b>Region:</b> {element.region}</p>
            <p><b>Capital:</b> {element.capital !== undefined ? element.capital[0] : "Sem capital"}</p>
        </div>

        arrayDivs.push(div)
        if (element === array.slice(-1)[0]) {
            arrayLi.push(<li className={styles.liBody} key={index*10}>{arrayDivs}</li>);
        }
    })

    return arrayLi;
}

async function request(url, setArrayCountries) {
    const response = await fetch(url);
    const arrayCountries = await response.json();
    setArrayCountries(arrayCountries);
}

function Body() {
    const [arrayCountries, setArrayCountries] = React.useState([]);
    const route = useRouter();
    const region = "asia";
    const name = "mAl".toLowerCase()
    const url = returnUrl(region);
    request(url, setArrayCountries);
    
    return (
        <>
            <ul className={styles.ulBody}>{returnUlTag(arrayCountries, name)}</ul>
            
        </>
    );
}

export default Body;



