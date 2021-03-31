import axios from "axios";
import React, { useState, useEffect } from "react";
import logo from '../../ball.svg';

const SearchPoke = () =>{

    const[pokemonData, setPokemonData] = useState([]);
    const[pokemon, setPokemon] = useState("bulbasaur");
    const[loading, setLoading] = useState(true);

    let baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    useEffect(() => {
        loadPokemon(baseUrl);
      }, []);

      //Pokemon State feltöltése
      function loadPokemon (url) {
        setLoading(true);
        fetch(url)
        .then(response => {response.json()})
        .then(data =>{setPokemonData(data)})
        setLoading(false);
      };


      let img = pokemonData['sprites']['other']['official-artwork']['front_default'];

      return (
        <>{
                loading ? 
                          <>                       
                          <div className="App">
                              <div className="App-header">
                                  <img src={logo} className="pokeball" alt="PokeBall" />
                                  <p>Loading...</p>
                              </div>
                          </div> 
                          </>
                      :
                      <>
                <div className="search_container">
                    <div className="poke_search">
                        <h2>Search by</h2>
                        <form action="#">
                            <label>Search by ID
                                <input type="number" name="id_number"/>
                            </label>
                            <p>or</p>
                            <label>Search by Name 
                                <input type="text" name="poke_name"/>
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                    <div className="PokeDate">
                        <div className="pokeName">
                            <h3>{pokemonData.name} #{pokemonData.id}</h3>
                        </div>
                        <div className="types">
                        {pokemonData.types.map(type => { return (<p className={type.type.name}> {type.type.name} </p>)})}
                        </div>
                        <div className="image">
                            <img src={img} alt={pokemon.name} />
                        </div>
                    </div>
                </div>
                </>
        }
    </>
    );
};

export default SearchPoke;