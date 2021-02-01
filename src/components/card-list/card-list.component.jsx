import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css'

export const CardList = props => (
    <div class="card-list">
    { 
        props.monstersNew.map(
        monstersNew =>
        <Card key={ monstersNew.id } monstersNew={monstersNew}>
        </Card>
        )
    }
        
    </div>
);
