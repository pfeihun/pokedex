import React from "react";
import './style.css';

const PokemonCard = (props) => {
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
      let classType = props.type[0].type.name
  return (
    <div className={"pokemon pokemon" + "-" + classType}>
      <h4>
        {props.name} #{props.id}
      </h4>
      <div className="types">
        {props.type.map(types => { return (<p className={types.type.name}> {types.type.name} </p>)})}
      </div>
      <div className="image">
        <img src={props.img} alt={props.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
