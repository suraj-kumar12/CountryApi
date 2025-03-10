

import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from '../components/Layout/UI/Loader';
import CountryCard from '../components/Layout/CountryCard';
import SearchFilter from '../components/Layout/UI/SearchFilter';

const Country = () => {


  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");


  useEffect(() => {
    startTransition(async() => {
      const res = await getCountryData();
      // console.log(res)
      setCountries(res.data);
    })
    
  }, []);

  if(isPending) return <Loader></Loader>;

  const searchCountry = (country) => {
    if(search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => { 
    if(filter==="All") return country;
    return country.region === filter;
  }

  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

  console.log(search, filter);
  return (
    <section className='country-section'>


    <SearchFilter
       search={search}
       setSearch={setSearch}
       filter={filter}
       setFilter={setFilter}
       countries={countries}
       setCountries={setCountries}
    ></SearchFilter>

    
      <ul className='grid grid-four-cols'>
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country = {curCountry} key={index} ></CountryCard>
        })}
      </ul>
    </section>
  )
}

export default Country
