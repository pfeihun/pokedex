import React, {useRef, useMemo, useState, useEffect} from "react";
import './css/main.css';
import arrow from '../../arrow.svg';
import gsap from "gsap";

const PokemonCard = (pokemonData) => {
  
  let timeline = useMemo(() => gsap.timeline({paused: true}), []);
  let pokemonRef = useRef(0);
  let nextRef = useRef(0);
  let divRef = useRef(0);
  let labelRef = useRef(0);
  let iconRef = useRef(0);
  let [play, setPlay] = useState(false);

  useEffect(() =>{
    timeline
    .to([labelRef.current],{opacity: 0, height: 0, position: 'absolute', duration: 0.1 })
    .to([nextRef.current],{borderRadius: '50%', width: '2.5em', height: '2.5em', ease: "Elastic.easeOut.config(.7, 0.3)", duration: 0.6})
    .to([iconRef.current], {opacity: 100, rotate:90, duration: 1, ease:'elastic'})
    .to([pokemonRef.current],{height:"500px", ease: "Elastic.easeOut.config(.7, 0.3)", duration: 0.6})
    .to([divRef.current.childNodes], {display: 'block', clipPath:'circle(100% at 50% 50%)', duration: 0.5}); 
  
  }, []);
  
   {/* // a több tipus összevonása
    let classer = props.type.map((type, i) =>{
        if(i%2==1){
            return type.type.name;
        }else{
            return type.type.name;
        }
        }
    );
    //a változó stringgé alakítása (különben a react hibát dob!) majd a , lecserélése _
    let classType = classer.toString().replace(/,/g, '_');
      */}

      useEffect(()=>{
        if(play){
          timeline.play();
        }else{
          timeline.reverse();
        }
      }, [play]);
      let pokemon = pokemonData.pokemonData;
      let img = pokemon.sprites.other.dream_world.front_default

  return (
    <div className="pokemon" ref={pokemonRef}>
      <h4>
        {pokemon.name} #{pokemon.id}
      </h4>
      <div className="types">
        {pokemon.types.map(type => { return (<p className={type.type.name}> {type.type.name} </p>)})}
      </div>
      <div className="image">
        <img src={img} alt={pokemon.name} />
      </div>
      <div className="poke_btn">
        <button className="btn_more" ref={nextRef} onClick={() => setPlay(!play)}>
          <span className="labelMore" ref={labelRef}>{play ? " " : "More"}</span>
          <span class="icon" > 
                <img src={arrow} alt="arrow" ref={iconRef}/>
          </span>
        </button>
        </div>
        <div  className="more">
          <div ref={divRef}>             
              <p>Health Point: {pokemon.stats[0].base_stat}</p>
              <p>Attack Point: {pokemon.stats[1].base_stat}</p>
              <p>Defense Point: {pokemon.stats[2].base_stat}</p>
              <p>height: {pokemon.height} "</p>
              <p>Weight: {pokemon.weight} lbs</p>
          </div>
          
        </div>
    </div>
  );
};

export default PokemonCard;
