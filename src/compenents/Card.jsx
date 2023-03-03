import React, {useState} from 'react';

const Card = ({title, number, legend}) => {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <h1>{number} $</h1>
            <h2>{legend}</h2>
        </div>
    )
}

export default Card;