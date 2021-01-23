import React from 'react';

import {Card} from '../card/card.component';

import './card-list.styles.css'


export const CardList = props => (
    <div className="card-list">
        {props.monsters.map(monster => ( 
            <Card key={ monster.id } monster={monster} /> //passing monster into our monster card component
          ))}
    </div>
    );
// key helps react know which element has been updated so that it knows it doesn't have to re-render everything