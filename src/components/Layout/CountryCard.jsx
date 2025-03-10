
import React from 'react'
import {Link} from 'react-router-dom'

const CountryCard = ({country}) => {
  const {flags, name, population, region, capital} = country;
  return (
    <li className='country-card card'>
    <div className="container-card bg-white-box">
      <img src={flags.svg} alt="" />
      <div className="countryInfo">
        <p className='card-title'>{name.common.length > 10 ? name.common.slice(0, 10) + ".." : name.common}</p>
        <p><span className='card-description'>Capital: </span>{capital}</p>
        <p><span className='card-description'>Population: </span> {population}</p>
        <p><span className='card-description'>Region: </span>{region}</p>
        <Link to = {`/country/${name.common}`}><button className='btn'>More</button></Link>
      </div>
    </div>
  </li>
  )

}

export default CountryCard;



