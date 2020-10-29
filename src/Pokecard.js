import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// if the number is less than 999 add two zeros then cut it down to 3 numbers so it will have zeros padded to the three places, ie 1 = 001, 23 = 023. Otherwise, return original number
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class Pokecard extends Component {
    render(){
        const props = this.props;
        let imgSrc = `${POKE_API}${padToThree(props.id)}.png`;
        console.log(props);
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={props.name} />
                </div>
                <div class="Pokecard-data">Type: {props.type}</div>
                <div class="Pokecard-data">Exp: {props.exp}</div>
            </div>
        );  
    }
}

export default Pokecard;