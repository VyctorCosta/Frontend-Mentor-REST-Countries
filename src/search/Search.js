import './Search.css';

export default () =>
<div className='pesquisa'>
    <div className='barradepesquisa'>
        <input type="text" id="search-bar" placeholder="Search for a country..."></input>
        
        <div className='icon'>
            <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png"/>
        </div>
    </div>

    <div>
        <select className="listapaises">
            <option value="Regions">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europa">Europa</option>
            <option value="Oceania">Oceania</option>
        </select> 
    </div>
</div>
