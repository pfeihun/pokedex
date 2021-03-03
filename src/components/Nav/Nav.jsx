import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import logo from'../../ball.svg';
import './style.css';

const Nav = (props) =>{
    
    return (
        <nav>
            <img src={logo} className="pokeball-nav" alt="logo" />
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li> <Link to='/pokedex'> Pokedex </Link> </li>
                <Link >
                <li> Poke Search </li>
                </Link>
                <Link >
                <li> Impressum </li>
                </Link>
            </ul>
            
        </nav>
    );
}

export default Nav;