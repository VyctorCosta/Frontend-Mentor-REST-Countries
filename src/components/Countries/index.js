import React, { useEffect } from 'react';
import style from './Countries.module.css';
import { useRouter } from 'next/router';
import { AuthContext } from "../../providers/auth";

async function getApiInfo(name, setCountryInfo) {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const response = await fetch(url);
  const arrayCountry = await response.json();
  setCountryInfo(arrayCountry[0]);
}


function Countries() {
  const [countryInfo, setCountryInfo] = React.useState(undefined);
  // const { darkMode, setDarkMode } = React.useContext(AuthContext);
  const router = useRouter();
  console.log(router.query)

  useEffect(() => {
    getApiInfo(router.query.name, setCountryInfo)
    
  }, [])

  if (!countryInfo) return (<></>);

  return (
  <div className={style.countries}>
    <button className={style.backDark} onClick={() => {
      router.push({
        pathname: "/",
        query: {
          
        }
      });
    }}>
      <img src={'/img/arrowDark.png'} alt='Seta para esquerda' height={20} width={20} />
      <p>Back</p>
    </button>

    <div className={style.detailsBody}>
      <div className={style.imgCountry}>
        <img src={countryInfo.flags.png} alt='Bandeira do país' />
      </div>
      <div className={style.dataDark}>
        <h2>{countryInfo.name.common}</h2>
        <div className={style.dataContainer}>
          <div className={style.leftData}>
            <p>Native Name: {" "}
            <span className={style.values}>{countryInfo.name.nativeName[Object.keys(countryInfo.name.nativeName).slice(-1)[0]].common}</span>
            </p>
            <p>Population: {" "}
            <span className={style.values}>{countryInfo.population}</span>
            </p>
            <p>Region: {" "}
            <span className={style.values}>{countryInfo.region}</span>
            </p>
            <p>Sub Region: {" "}
            <span className={style.values}>{countryInfo.subregion}</span>
            </p>
            <p>Capital: {" "}
            <span className={style.values}>{countryInfo.capital[0]}</span>
            </p>
          </div>
          <div className={style.rightData}>
            <p>Top-level Domain: {" "}
            <span className={style.values}>{countryInfo.tld[0]}</span>
            </p>
            <p>Currencies: {" "}
            <span className={style.values}>{countryInfo.currencies[Object.keys(countryInfo.currencies)[0]].name}</span>
            </p>
            <p>Languages: {" "}
            <span className={style.values}>{(function() {
              let string = "";
              for (let value of Object.values(countryInfo.languages)) {
                string += `${value}, `;
              }
              return string.slice(0, -2);
            })()}</span>
            </p>
            </div>
        </div>
      Border Countries:
      <div className={style.borderCountryDark}>
        <p>{(countryInfo.borders && countryInfo.borders[0]) ? countryInfo.borders[0] : "Not Exists"}</p>
      </div>
      <div className={style.borderCountryDark}>
        <p>{(countryInfo.borders && countryInfo.borders[1]) ? countryInfo.borders[1] : "Not Exists"}</p>
      </div>
      <div className={style.borderCountryDark}>
        <p>{(countryInfo.borders && countryInfo.borders[2]) ? countryInfo.borders[2] : "Not Exists"}</p>
      </div>
      </div>

    </div>
  </div>
  
  );
}

export default Countries;