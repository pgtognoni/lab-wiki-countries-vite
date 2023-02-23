import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import CountryDetails from './components/CountryDetails'
import CountriesList from './components/CountriesList'
import axios from 'axios'

function App() {
  const [ dataList, setDataList ] = useState([]);

  useEffect(() => {

    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        const data = response.data
        return data
      })
      .then(data => setDataList(data))
      .catch(error => console.log(error))

  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList dataList={dataList} />
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails dataList={dataList} />} />
            
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default App
