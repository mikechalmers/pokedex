import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const NICER_IMGS = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
    render(){
        const props = this.props;
        let imgSrc = `${POKE_API}${props.id}.png`;
        console.log(props);
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{props.name}</h1>
                <p></p>
                <img src={imgSrc} alt={props.name} />
                <div class="Pokecard-data">Type: {props.type}</div>
                <div class="Pokecard-data">Exp: {props.exp}</div>
            </div>
        );  
    }
}

export default Pokecard;