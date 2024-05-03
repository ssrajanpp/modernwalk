

import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
      return<header className="mw-header">
              
           <nav class="navbar navbar-expand-lg fixed-top bg-light">

           <div class="container-fluid d-flex justify-content-center">
           <h1 className='mw-header-title'><Link to="/">Modern Walk</Link></h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            </nav>
            </header>
}
}

export default Header;