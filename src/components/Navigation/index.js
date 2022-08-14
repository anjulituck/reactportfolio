import React from 'react';


function Nav() {
  
    return (
        <header className="d-flex flex-row container-xxl position-fixed top-1 rounded" id="header">
            <h2 id="logo">
                <a href="/">
                    ANJULI GARCIA
                </a>
            </h2>
            <nav className="mx-1 container ">
                <ul className="nav nav-tabs" id="nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#portfolio">
                        PORTFOLIO
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#resume">
                        RESUME
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#contact">
                        CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
      </header>
    );
  }
  
  export default Nav;