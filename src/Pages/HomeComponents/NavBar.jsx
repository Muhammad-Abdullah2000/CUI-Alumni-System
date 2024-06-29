import React from 'react'
import './Navbar.css';

const NavBar = () => {
  return (
    <>
        <div className="Navbar">
                <nav>
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>

                    <ul>
                        <li><a className="active" href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">News</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">FAQ</a></li>
                    </ul>
                </nav>
                </div>


    </>
  )
}

export default NavBar
