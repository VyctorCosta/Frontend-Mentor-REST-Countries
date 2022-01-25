import './body.css'

function returnArrayElements(url) {
    const request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    const string = request.responseText;
    return JSON.parse(string);
    
}

function returnUrl(region) {
    if (!region) return "https://restcountries.com/v3.1/all";

    return `https://restcountries.com/v3.1/region/${region}`
}

function createUlBody(array, name) {
    const arrayLi = [];
    let arrayDivs = [];
    let div;
    if (name) {
        array = array.filter(element => element.startsWith(name))
    }

    array.forEach((element, index) => {
        if (index !== 0 && index % 4 === 0) {
            arrayLi.push(<li key={index*10}>{arrayDivs}</li>);
            arrayDivs = [];
        }

        div = <div className="country-body" key={index}>
            <img src={element.flags.png} />
            <div className='content'>
                <h1>{element.name.common}</h1>
                <p><b>Population:</b> {element.population}</p>
                <p><b>Region:</b> {element.region}</p>
                <p><b>Capital:</b> {element.capital !== undefined ? element.capital[0] : "Sem capital"}</p>
            </div>
        </div>

        arrayDivs.push(div)
        if (element === array.slice(-1)[0]) {
            arrayLi.push(<li key={index*10}>{arrayDivs}</li>);
        }
    })

    return arrayLi;
}

function Body() {
    const region = "oceania";
    const name = ""
    const url = returnUrl(region);
    const arrayElements = returnArrayElements(url);
    return (
        <ul>{createUlBody(arrayElements, name)}</ul>
    );

}

export default Body;