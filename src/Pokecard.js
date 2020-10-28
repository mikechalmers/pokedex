import React, { Component } from 'react';

class Pokecard extends Component {
    render(){
        const props = this.props;
        console.log(props);
        return(
            <div className="Pokecard">
                <h1>{props.name}</h1>
                <p>Exp: {props.exp}</p>
            </div>
        );  
    }
}

export default Pokecard;