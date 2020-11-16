import React from 'react';
import './NavBar.css';

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper nav">
            <a href=" " className="nav-link">Welcome, {user.name}</a>
            <div className="links">
              {/* <li><a href="/users" className="nav-link">Users</a></li> */}
              <a href="/headaches/add" className="nav-link link">Add Headache</a>
              <a href="/headaches" className="nav-link link">My Headaches</a>
              <a href=" " className="nav-link logout" onClick={handleLogout}>Log Out</a>
            </div>
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
