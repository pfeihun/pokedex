import React, { useState, useEffect } from "react";
import logo from '../../ball.svg';
import './App.css';
//services
import {catchPokemon, getPoke} from "../../services/pokemon";
//components
import PokemonCard from "../Card/Card";

function Pokedex() {
  
  const[pokemonData, setPokemonData] = useState([]);
  const[nextUrl, setNextUrl] = useState('');
  const[prevUrl, setPrevUrl] = useState('');
  const[loading, setLoading] = useState(true);
  const[offset, setOffset] = useState(0);
  const[limit, setLimit] = useState("20");
  let baseUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

  useEffect(() => {
    getData();
  }, []);
  
  // alap lekérdezés létrehozása
  async function getData(){
    //adatok meghívása a külső JS állományból
    let response = await catchPokemon(baseUrl);
    // ha megvan State -ek át állítása:
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    let data = await loadPokemon(response.results);
    setLoading(false);
  }

  // tovább és vissza lépés 1. van e értéke? 2 ha van beállítása
  let next = async() =>{
        if(!nextUrl) return;
        //töltő képernyő -> true
        setLoading(true)
        //async művelet kérése, végrehajtása
        let data = await catchPokemon(nextUrl)
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        // töltő képernyő -> false
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

  //Pokemon State feltöltése
  async function loadPokemon (data) {
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

  let handleLimit = (e) =>{ setLimit(e.target.value) }
  let handleOffset = (e) => { setOffset(e.target.value) }

  function handleSubmit(e){
    e.preventDefault();
    getData();
  }

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
                            <form onSubmit={handleSubmit}>
                              <ul className="poke_changer">
                                  <li><button onClick={prev}>Back</button></li>
                                  <li><label>Limit: 
                                              <select value={limit} onChange={handleLimit}>
                                                <option value="20">20</option>
                                                <option value="40">40</option>
                                                <option value="70">70</option>
                                              </select>
                                      </label>
                                  </li>
                                  <li>
                                    <label>Selected Regio:
                                        <select onChange={handleOffset}>
                                            <option value="0">Kanto</option>
                                            <option value="151">Johto</option>
                                            <option value="251">Hoenn</option>
                                            <option value="386">Sinnoh</option>
                                            <option value="494">Unova</option>
                                            <option value="649">Kalos</option>
                                            <option value="721">Alola</option>
                                            <option value="809">Galar</option>
                                            <option value="898">Another Forms</option>
                                            <option value="910">Mega Forms</option>
                                        </select>
                                    </label>
                                  </li>
                                  <li><input type="submit" value="submit" className="submit"/></li>
                                  <li><button onClick={next}>Next</button></li>
                              </ul>
                            </form>
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
