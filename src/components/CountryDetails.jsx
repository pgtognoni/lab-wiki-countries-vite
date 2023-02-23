import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function CountryDetails({ dataList }) {

    const { alpha3Code } = useParams();
    const [ country, setCountry ] = useState([]);

    useEffect(() => {

        //   axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        //     .then(res => {
        //         console.log('useEffect: ', res.data.name.official)
        //         return res.data
        //     })
        //     .then(data => setCountry([data]))
        //     .catch(err => console.log(err))

        const fetchData = async () => { 
            try { 
                const res = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
                console.log('useEffect: ', res.data.name.official)
                setCountry([res.data])  
            } catch (error) { 
                console.log(error) 
            }
        }

        fetchData()  

        // let newCountry = dataList.filter(item => item.alpha3Code === alpha3Code)

        // setCountry(newCountry)

    }, [alpha3Code])

    
  return (
    <div className="col-7">
      {country.map(country => {
        return (
            <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common} flag`}/>
            <h1>{country.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{country.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {country.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        {country.borders.length > 0
                            ? country.borders.map(code => {
                                const border = dataList.find(item => item.alpha3Code === code)
                                return (
                                    <li key={code}><Link to={`/${code}`}>{border.name.common}</Link></li>
                                )})
                            : null
                        }
                        </ul>
                    </td>
                    </tr>
                </tbody>
            </table>
            </div>
        )})}
    </div>
  )
}

export default CountryDetails