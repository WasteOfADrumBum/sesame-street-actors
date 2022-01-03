import React from 'react'
import { Link } from 'react-router-dom'
import './_navBar.scss'

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="./assets/images/logo.png" alt="logo" className="logo" />
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/sesame-street" className="text-warning">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star" />
            </Link>
            <span className="text-black text-decoration-none">
              {' '}
              Rating: 8.1/10
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
