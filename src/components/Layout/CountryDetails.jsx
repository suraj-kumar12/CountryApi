

import React, { useEffect, useState, useTransition } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from './UI/Loader';
import { getCountryIndData } from '../../api/postApi';

const CountryDetails = () => {
    const params = useParams();

    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState();
  
    useEffect(() => {
      startTransition(async() => {
        const res = await getCountryIndData(params.id);
        console.log(res)

        if(res.status===200){
            setCountry(res.data[0]);
        }
       
       
      })
      
    }, []);
  
    if(isPending) return <Loader></Loader>;
     
    console.log(params);
  return (
    <section className='cards country-details-card container'>
    <div className='container-card bg-green-box'>
        {country && (
            <>
                <div className='country-image grid grid-two-cols'>
                    <img src={country.flags?.svg} alt={country.flags?.alt || 'Flag'} className='flag' />
                </div>
                <div className="country-content">
                    <p className='card-title'>{country.name?.official}</p>
                    <div className="infoContainer">
                        <p>
                            <span className='card-description'>Native Names: </span>
                            {Object.values(country.name?.nativeName || {}).map(name => name.common).join(", ")}
                        </p>

                        <p>   <span className='card-description'>Population: </span>{country.population.toLocaleString()}</p>
                        
                        <p> <span className='card-description'>Region: </span>{country.region}</p>
                        <p> <span className='card-description'>Sub-region: </span>{country.subregion}</p>
                        <p> <span className='card-description'>Capital: </span>{country.capital}</p>
                        <p> <span className='card-description'>Top level Domain: </span>{country.tld[0]}</p>
                        <p> <span className='card-description'>Currencies: </span>
                        {Object.keys(country.currencies)
                        .map((curElem) => country.currencies[curElem].name)
                        .join(",")}
                        </p>

                    </div>
                </div>
            </>
        )}

        <div className="country-card-backBtn">
        <Link to = "/country"><button>Go Back</button></Link>
        </div>

    </div>
</section>
  )
}

export default CountryDetails;


