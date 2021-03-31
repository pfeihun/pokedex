import React from 'react';
import {Link} from 'react-router-dom';
import logo from'../../ball.svg';
import './style.css';

const Nav = () =>{
    
    return (
        <nav>
            <img src={logo} className="pokeball-nav" alt="logo" />
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li> <Link to='/pokedex'> Pokemons </Link> </li>
                <li>< Link to='/SearchPoke'> Poke Search</Link> </li>     
                
               {/*} <Link >
                <li> Impressum </li>
                </Link>*/}
            </ul>
            
        </nav>
    );
}

export default Nav;