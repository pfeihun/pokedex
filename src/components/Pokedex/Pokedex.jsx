import React, { useState, useEffect } from "react";
import logo from '../../ball.svg';
import './App.css';
//services
import {catchPokemon, getPoke} from "../../services/pokemon";
//components
import PokemonCard from "../Card/Card";

function Pokedex() {
  //
  const[pokemonData, setPokemonData] = useState([]);
  const[nextUrl, setNextUrl] = useState('');
  const[prevUrl, setPrevUrl] = useState('');
  const[loading, setLoading] = useState(true);
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    async function getData(){
      //adatok meghívása a külső JS állományból
      let response = await catchPokemon(baseUrl);
      // ha megvan State -ek át állítása:
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let data = await loadPokemon(response.results);
      setLoading(false);
    }

    getData();
  }, []);
  // tovább és vissza lépés 1. van e értéke? 2 ha van be állít
  let next = async() =>{
        if(!nextUrl) return;
        setLoading(true)
        let data = await catchPokemon(nextUrl)
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
  }

  let prev = async() =>{
    if(!prevUrl) return;
    setLoading(true)
    let data = await catchPokemon(prevUrl)
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
}

    

  let loadPokemon = async (data) => {
    let _pokemon = await Promise.all(
      data.map(
        async pokemon => {
          let pokeData = await getPoke(pokemon.url);
          return pokeData
        }
      )
    );

    setPokemonData(_pokemon)
  };

  console.log(pokemonData)


  return (
      <>
          {
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
                        
                        <div className="App">
                          <div className="btn_container">
                            <ul className="poke_changer">
                                <li><button onClick={prev}>Back</button></li>
                                <li><button onClick={next}>Next</button></li>
                            </ul>
                          </div>
                          <div className="container"> 
                            {pokemonData.map((pokemon, i) =>{
                              return <PokemonCard 
                                key ={i}
                                pokemonData={pokemon}
                                />
                            })}
                            
                          </div> 
                          <div className="btn_container">
                            <ul className="poke_changer">
                                <li><button onClick={prev}>Back</button></li>
                                <li><button onClick={next}>Next</button></li>
                            </ul>
                          </div>
                      </div>
                    </>
          }
    </>
  );
}

export default Pokedex;
