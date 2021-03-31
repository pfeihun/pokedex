import React from 'react';
import './home.css';
function Home (){

    return(
        <div className="home">
            <h1>Welcome my PokeApp!</h1>
            <div className="help">
                <h2>How it work?</h2>
                <p>It's simple! Just choose a menu option and enjoy!</p>
                <div className="home_container">
                    <div className="home_card">
                        <h4>Pokemons</h4>
                        <p>Hier you find the all of Pokemon</p>
                    </div>
                    <div className="home_card">
                        <h4>PokeSearch</h4>
                        <p>Hier you can search </p>
                    </div>
                    <div className="home_card">
                        <h4>Impress</h4>
                        <p>Hier you find the all of Pokemon</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;