import React from 'react';

function Nav() {
  
    return (
        <header className="flex-row px-1 container" id="header">
            <h2>
                <a href="/">
                    ANJULI GARCIA
                </a>
            </h2>
            <nav>
                <ul className="container nav" id="nav">
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