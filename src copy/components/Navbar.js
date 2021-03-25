import React from 'react'
import {Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="container">
      <div className="row" style={{textAlign: 'center'}}>
        <div className="four columns">
            <Link to="/">Home</Link>
          
        </div>
        <div className="four columns">
          <Link to="/discover">Discover</Link>
        </div>
        <div className="four columns">
        <Link to="/search">Search</Link>
        </div>
      </div>
    </div>
  )
}
export default Navbar