import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList({ dataList }) {

return (
  <div className="col-5" style={{maxHeight: '90vh', overflow: "scroll"}}>
    <div className="list-group">
        {dataList.map((country) => {
          return(
          <Link 
              key={country.alpha3Code} 
              className="list-group-item list-group-item-action" 
              to={`/${country.alpha3Code}`} >
                <img 
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                  alt={`${country.name.common} flag`}
                />
                {country.name.common}
          </Link>
          )
        })}
    </div>
  </div>
)
}

export default CountriesList