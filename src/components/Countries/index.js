import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Style from "styled-components";
import { useAuth } from "../../providers/auth";

const DivCountries = Style.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 0;
  padding: 15px;
  width: 100%;
  min-height: 100vh;
`;

const ButtonBack = Style.button`
  background-color: ${({ theme }) => theme.elementsColor};
  color: ${({ theme }) => theme.textColor};
  border: 0;
  outline: 0;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
  margin-left: 255px;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;

  border-radius: 6px;
`;

const DivDetailsBody = Style.div`
  display: flex;
  margin: 15px auto 0;
  padding: 15px;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ImgCountry = Style.div`
  flex: 0.5;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const DivData = Style.div`
  margin-left: 80px;
  flex: 0.5;
  color: ${({ theme }) => theme.textColor};

  h2 {
    margin-bottom: 40px;
    font-size: 26pt;
  }
`;

const DivDataContainer = Style.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 45px;

  p {
    padding-bottom: 12px;
  }
`;

const DivBorderCountry = Style.div`
  background-color: 
  color: ${({ theme }) => theme.textColor};

  border-radius: 2px;
  padding: 0 15px;

  display: inline-block;
  margin: 10px;


  cursor: pointer;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const Loading = Style.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 100%;
`;

function Countries() {
  const [countryInfo, setCountryInfo] = React.useState(undefined);
  const { darkMode } = useAuth();
  const router = useRouter();
  console.log("router query name", router.query.name)

  const getApiInfo = async (name) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const arrayCountry = await response.json();
    setCountryInfo(arrayCountry[0]);
  }

  useEffect(() => {
    getApiInfo(router.query.name)
  }, [])

  if (!countryInfo) return (<Loading></Loading>);

  return (
  <DivCountries>
    <ButtonBack onClick={() => router.back()}>
      <img src={darkMode ? '/img/arrowDark.png' : '/img/arrow.png'} alt='Seta para esquerda' height={20} width={20} />
      <p>Back</p>
    </ButtonBack>

    <DivDetailsBody>
      <ImgCountry>
        <img src={countryInfo.flags.png} alt='Bandeira do país' />
      </ImgCountry>
      <DivData>
        <h2>{countryInfo.name.common}</h2>
        <DivDataContainer>
          <div className="leftData">
            <p>Native Name: {" "}
            <span className="values">{countryInfo.name.nativeName[Object.keys(countryInfo.name.nativeName).slice(-1)[0]].common}</span>
            </p>
            <p>Population: {" "}
            <span className="values">{countryInfo.population}</span>
            </p>
            <p>Region: {" "}
            <span className="values">{countryInfo.region}</span>
            </p>
            <p>Sub Region: {" "}
            <span className="values">{countryInfo.subregion}</span>
            </p>
            <p>Capital: {" "}
            <span className="values">{countryInfo.capital[0]}</span>
            </p>
          </div>
          <div className="rightData">
            <p>Top-level Domain: {" "}
            <span className="values">{countryInfo.tld[0]}</span>
            </p>
            <p>Currencies: {" "}
            <span className="values">{countryInfo.currencies[Object.keys(countryInfo.currencies)[0]].name}</span>
            </p>
            <p>Languages: {" "}
            <span className="values">{(function() {
              let string = "";
              for (let value of Object.values(countryInfo.languages)) {
                string += `${value}, `;
              }
              return string.slice(0, -2);
            })()}</span>
            </p>
            </div>
        </DivDataContainer>
      Border Countries:
      <DivBorderCountry>
        <p>{(countryInfo.borders && countryInfo.borders[0]) ? countryInfo.borders[0] : "Not Exists"}</p>
      </DivBorderCountry>
      <DivBorderCountry>
        <p>{(countryInfo.borders && countryInfo.borders[1]) ? countryInfo.borders[1] : "Not Exists"}</p>
      </DivBorderCountry>
      <DivBorderCountry>
        <p>{(countryInfo.borders && countryInfo.borders[2]) ? countryInfo.borders[2] : "Not Exists"}</p>
      </DivBorderCountry>
      </DivData>

    </DivDetailsBody>
  </DivCountries>
  
  );
}

export default Countries;