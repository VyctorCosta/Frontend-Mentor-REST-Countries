import React, { Component } from "react";
import styles from "./Body.module.css";
import { useRouter } from "next/router";
import { AuthContext } from "../../providers/auth";

function returnUrl(region) {
    if (!region) return "https://restcountries.com/v3.1/all";

    return `https://restcountries.com/v3.1/region/${region}`
}

function returnUlTag(array, name) {
    const route = useRouter();
    const arrayLi = [];
    let arrayCountries = array;
    let arrayDivs = [];
    let div;
    if (name) {
        arrayCountries = array.filter(element => element.name.common.toLowerCase().startsWith(name));
    }
    arrayCountries.forEach((element, index) => {
        if (index !== 0 && index % 4 === 0) {
            arrayLi.push(<li className={styles.liBody} key={Math.random()}>{arrayDivs}</li>);
            arrayDivs = [];
        }

        div = <div className={styles.countryBody} key={Math.random()} name={element.name.common} onClick={(e) => {
            route.push(`/countries?name=${element.name.common}`)
        }}>
            <img src={element.flags.png} />
            <h1>{element.name.common}</h1>
            <p><b>Population:</b> {element.population}</p>
            <p><b>Region:</b> {element.region}</p>
            <p><b>Capital:</b> {element.capital !== undefined ? element.capital[0] : "Sem capital"}</p>
        </div>

        arrayDivs.push(div)
        if (element === arrayCountries.slice(-1)[0]) {
            arrayLi.push(<li className={styles.liBody} key={Math.random()}>{arrayDivs}</li>);
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
    const { region } = React.useContext(AuthContext);
    const { inputValue } = React.useContext(AuthContext);
    const url = returnUrl(region);
    request(url, setArrayCountries);
    
    return (
        <>
            <ul className={styles.ulBody}>{returnUlTag(arrayCountries, inputValue)}</ul>      
        </>
    );
}

export default Body;



