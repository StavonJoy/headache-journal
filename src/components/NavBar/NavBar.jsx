import React from 'react';
import './NavBar.css';

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper nav">
              <a href=" " className="nav-link">Welcome, {user.name}</a>
              {/* <li><a href="/users" className="nav-link">Users</a></li> */}
              <a href=" " className="nav-link link" onClick={handleLogout}>Log Out</a>
              <a href="/headaches/add" className="nav-link link">Add Headache</a>
              <a href="/headaches" className="nav-link link">My Headaches</a>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
              <a href="/login" className="nav-link link">Log In</a>
              {/* <li><a href="/users" className="nav-link">Users</a></li> */}
              <a href="/signup" className="nav-link link">Sign Up</a>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
