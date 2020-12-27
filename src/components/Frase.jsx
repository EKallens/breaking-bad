import React from 'react';
import './Frase.css';

const Frase = ({frase}) => {

    const { author, quote } = frase;

    return (
        <blockquote>
            {quote}
            <span>{author}</span>
        </blockquote>
    )
}

export default Frase
