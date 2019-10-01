import React from 'react';
import {Link, NavLink, withRouter } from 'react-router-dom';

  const NavBar =(props)=>{
    //   setTimeout(() => {
    //     props.history.push('/about');
    //   }, 2000);
    return (

            <nav>
            <div className="nav-wrapper">
                <Link to="#" className="brand-logo">Logo</Link>
                <ul className="right hide-on-med-and-down">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                </ul>
             </div>
            </nav>
        
    )
}

export default withRouter(NavBar);