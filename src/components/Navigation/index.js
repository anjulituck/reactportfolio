import React from 'react';

function Nav() {
  
    return (
        <header className="d-flex flex-row container position-fixed top-0" id="header">
            <h2 id="logo">
                <a href="/">
                    ANJULI GARCIA
                </a>
            </h2>
            <nav className="mx-1 container ">
                <ul className=" nav " id="nav">
                    <li>
                        <a href="#about">
                        ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                        PORTFOLIO
                        </a>
                    </li>
                    <li>
                        <a href="#resume">
                        RESUME
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                        CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
      </header>
    );
  }
  
  export default Nav;