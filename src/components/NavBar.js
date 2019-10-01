import React from 'react';
import {Link, NavLink, withRouter } from 'react-router-dom';

  const NavBar =(props)=>{
      setTimeout(() => {
        props.history.push('/about');
      }, 2000);
    return (

            <nav>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        
    )
}

export default withRouter(NavBar);