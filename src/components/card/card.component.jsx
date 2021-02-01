import React from 'react';
import './card.styles.css'

export const Card = props => (
    <div class="card-container">
        <img alt="monsterNew" src={'https://robohash.org/${props.monsterNew.id}?set=set2'}></img>
        <h2>{ props.monstersNew.name }</h2>
        <p>{ props.monstersNew.email }</p>
    </div>
);