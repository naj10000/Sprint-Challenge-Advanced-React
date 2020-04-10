import React, { Component } from 'react';
import axios from 'axios';

 class Players extends React.Component {
     state ={
         players: []
     };

     componentDidMount(){
        axios.get('http://localhost:5000/api/players')
          .then( response => {
            this.setState({
              players: response.data
            });
            console.log(this.state.players);
          });
     }
    
    
    render() {
        return (
            <div>
            {this.state.players.map(player=> {
                return(
                    <div className="card">
                <h3 className="username" key={player.id}>{player.name}</h3>
                <h4 key={player.id}>{player.country}</h4>
                </div>
                )
            })}    
            </div>
        )
    }
}

export default Players
