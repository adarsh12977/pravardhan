import React from 'react'
import {Link} from 'react-router-dom';
import '../../App.css';

const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <Link className="navbar-brand" to="/">
    <img src="https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_1280.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      {" "}Medical All-Rounder</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        </ul>
  </div>
  </div>
</nav>
<div className='nav-down'>
<ul className="nav nav-pills nav-fill">
  <li className="nav-item">
    <Link className="nav-link" aria-current="page" to="/status">Health Status</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/remind">Medicine Reminder</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/best">Find best hospital</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/nearby">Find nearby hospitals</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/blogs">Cure Blogs</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/learn">Learn Algorithms</Link>
  </li>
</ul>
</div>
    </>
  )
}

export default Header