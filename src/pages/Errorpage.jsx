

import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Errorpage = () => {

    const error = useRouteError();

  return <div className='error-page'>
    <h1>Oops! An error occured.</h1>
    {error && <p>{error.data}</p> }
    <Link to = '/'><button>go home page</button></Link>
  </div>
   
  
}

export default Errorpage
