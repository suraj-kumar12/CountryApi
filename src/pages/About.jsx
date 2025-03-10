
import React from 'react'
import countryFacts from '../api/countryData.json'

const About = () => {
  return (
  <div className='section-about container'>
    <h2 className='container-title'>
    Here the Intresting Facts <br />
    We are Proud of
    </h2>

    <div className="gradient-cards">

    {countryFacts.map((country) => {
      const {id, countryName, capital, population, intrestingFact} = country;
      return ( <div className="card" key={id}>
        <div className="container-card bg-blue-box">
        <p className='card-title'>{countryName}</p>
        <p ><span className='card-description'>Capital: </span> {capital}</p>
        <p ><span className='card-description'>Population: </span>{population}</p>
        <p ><span className='card-description'>Interesting Facts: </span>{intrestingFact}</p>
        </div>
      </div>)
      
    })}

   
    </div>
  </div>
  )
}

export default About
