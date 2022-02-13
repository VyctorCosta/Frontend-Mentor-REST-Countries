import React, { useEffect } from "react";
import Style from "styled-components";
import { useRouter } from "next/router";
import { useAuth } from "../../providers/auth";

const Ul = Style.ul`
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor};
    padding: 50px 50px 35% 50px;
`;

const Li = Style.li`
    display: flex;
    gap: 8%;
    margin-left: 10px;
    margin-bottom: 80px;
`;

const Div = Style.div`
    background-color: ${({ theme }) => theme.elementsColor};
    color: ${({ theme }) => theme.textColor};
    justify-content: space-around;

    font-size: 10pt;

    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
    padding-bottom: 2rem;

    
    width: 320px;
    height: 350px;

    box-shadow: 0px 5px 8px rgba(0,0,0,0.15);

    img {
        width: 100%;
        height: 200px;
    }

    h2 {
        padding-left: 1.5rem;
        padding-top: 1.6rem;
        padding-bottom: 0.5rem;
        font-size: 15pt;
    }

    p {
        padding-left: 1.5rem;
        padding-top: 0.5rem;

    }
`;

async function getInfoApi(setArrayCountries, name, region) {
    const response = await fetch(`/api/home?name=${name}&region=${region}`);
    const array = await response.json();
    setArrayCountries(array);
}

function createElement(array, router) {
    if (array.length === 0) return array;
    const arrayLi = [];
    let arrayDiv = [];
    let div;
    
    array.forEach((element, index) => {
        div = <Div key={index} onClick={(e) => {
            e.preventDefault();
            router.push({
                pathname: `/${element.name.common}`,
            })
        }}>
            <img src={element.flags.png} />
            <h2>{element.name.common}</h2>
            <p><b>Population:</b> {element.population}</p>
            <p><b>Region:</b> {element.region}</p>
            <p><b>Capital:</b> {element.capital !== undefined ? element.capital[0] : "No capital"}</p>
        </Div>;
        arrayDiv.push(div);

        if (arrayDiv.length === 4) {
            arrayLi.push(<Li key={index*10}>{arrayDiv}</Li>);
            arrayDiv = [];
        } else if (element === array[array.length-1]) arrayLi.push(<Li key={index*10}>{arrayDiv}</Li>);
    })

    return arrayLi;
}

function Body() {
    const {arrayCountries, setArrayCountries, inputValue, region} = useAuth();
    const router = useRouter();

    
    useEffect(() => {
        getInfoApi(setArrayCountries, inputValue, region)
    }, [inputValue, region])

    return (
        <>
            <Ul>{createElement(arrayCountries, router)}</Ul>          
        </>
    );
}

export default Body;



