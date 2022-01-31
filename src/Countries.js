import React from 'react';
import style from './countries.module.css'

function countries() {
  return (
  <div className={style.countries}>
    <button className={style.back}>
      <p>Go Back</p>
    </button>
    <div className={style.detailsBody}>
      <div className={style.imgCountry}>
        <img src='https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg' alt='' />
      </div>
      <div className={style.data}>
        <h2>Name</h2>
        <div className={style.dataContainer}>
          <div className={style.leftData}>
            <p>Native Name: {" "}
            <span className={style.values}>Test</span>
            </p>
            <p>Population: {" "}
            <span className={style.values}>Test</span>
            </p>
            <p>Region: {" "}
            <span className={style.values}>Test</span>
            </p>
            <p>Sub Region: {" "}
            <span className={style.values}>Test</span>
            </p>
            <p>Capital: {" "}
            <span className={style.values}>Test</span>
            </p>
          </div>
          <div className={style.rightData}>
            <p>Top-level Domain: {" "}
            <span className={style.values}>Test</span>
            </p>
            <p>Currencies: {" "}
            <span className={style.values}>Test</span>
            </p>
            <p>Languages: {" "}
            <span className={style.values}>Test</span>
            </p>
            </div>
        </div>
      Border Countries:
      <div className={style.borderCountry}>
        <p>Test</p>
      </div>
      <div className={style.borderCountry}>
        <p>Test</p>
      </div>
      <div className={style.borderCountry}>
        <p>Test</p>
      </div>
      </div>

    </div>
  </div>
  
  );
}

export default countries;