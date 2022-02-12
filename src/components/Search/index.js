import React, { useEffect } from "react";
import { useAuth } from "../../providers/auth";
import Style from "styled-components";

const Pesquisa = Style.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    width: auto;
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.06);

    align-items: center;
    justify-content: space-between;
`;

const BarraDePesquisa = Style.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    margin: 30px 70px;
    width: 60%;
    border-radius: 5px;
    position: relative;
    box-shadow: 0px 1px 3px 3px rgba(0,0,0,0.12);

    input {
        background-color: ${({ theme }) => theme.elementsColor};
        color: ${({ theme }) => theme.inputColor};
        height: 55px;
        width: 98%;
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 0 0px 0 20px;
        font-size: 18px;
        box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        
        position: absolute;
        right: 0px;
        top: 0px;

        height: 55px;
        width: 55px;
        text-align: center;
        line-height: 55px;
        font-size: 20px;
        cursor: pointer;
    }
`;

const ListaPaises = Style.select`
    background-color: ${({ theme }) => theme.elementsColor};
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
    margin-right: 60px;

    height: 55px;
    padding: 0 20px;

    text-align: center;
    line-height: 55px;
    font-size: 20px;

    outline: none;
    border: none;
    border-radius: 5px;

    box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
`;

export default () => {
    const { setInputValue, setRegion, darkMode } = useAuth();

    return (
        <Pesquisa>
            <BarraDePesquisa>
                <input type="text" id="search-bar" placeholder="Search for a country..." onChange={event => {
                    const value = event.target.value.toLowerCase();
                    setInputValue(value);
                }} />
                
                <div className="icon">
                    <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png"/>
                </div>
            </BarraDePesquisa>

            <div>
                <ListaPaises onChange={e => {
                    const regionValue = e.target.value
                    setRegion(regionValue);
                }}>
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </ListaPaises> 
            </div>
        </Pesquisa>
    )
}