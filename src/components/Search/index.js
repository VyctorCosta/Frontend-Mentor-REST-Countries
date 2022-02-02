import React, { useEffect } from "react";
import { AuthContext } from "../../providers/auth";

export default () => {
    const { setInputValue, setRegion, inputValue, region, setArrayCountries, getInfoApi } = React.useContext(AuthContext);

    return (
        <div className='pesquisa'>
        <div className='barradepesquisa'>
            <input type="text" id="search-bar" placeholder="Search for a country..." onChange={event => {
                const value = event.target.value.toLowerCase();
                getInfoApi(setArrayCountries, value, region)
                setInputValue(value);
            }} />
            
            <div className='icon'>
                <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png"/>
            </div>
        </div>

        <div>
            <select className="listapaises" onChange={e => {
                const regionValue = e.target.value
                getInfoApi(setArrayCountries, inputValue, regionValue)
                setRegion(regionValue);
            }}>
                <option value="">All Regions</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select> 
        </div>
        <style jsx>{`
            .pesquisa {
                width: 100%;
                display: flex;
            
                align-items: center;
                justify-content: space-between;
            }
            
            .barradepesquisa {
                margin: 30px 50px;
                background: #fff;
                width: 60%;
                border-radius: 5px;
                position: relative;
                box-shadow: 0px 1px 5px 3px rgba(0,0,0,0.12);
            }
            
            .barradepesquisa input{
                height: 55px;
                width: 98%;
                outline: none;
                border: none;
                border-radius: 5px;
                padding: 0 0px 0 20px;
                font-size: 18px;
                box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
            }
            
            .barradepesquisa .icon{
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
            
            .listapaises {
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
                
                background-color: #fff;
                box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
            }
        `}</style>
    </div>
    )
}