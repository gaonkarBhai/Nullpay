import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
    <div id='not_found'>
      <div className="not_found">
        <div className="not_found404 d-flex justify-content-center align-items-center flex-column">
          <h1>404</h1>
          <h2>WE ARE SORRY, PAGE NOT FOUND</h2>
          <p>THE PAGE YOU ARE LOADING MIGHT HAVE BEEN REMOVED OR IT'S NAME CHANGED OR IS TEMPORARILY UNAVABLE</p>
          <NavLink to="/" className='btn btn-style'>Back</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Error
