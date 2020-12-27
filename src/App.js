import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {

  const [frase, setFrase] = useState({});

  const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

  const obtenerFrase = async() => {

    const res = await fetch(url);
    const frase = await res.json();

    setFrase(frase[0]);
  }

  useEffect( () => {
    obtenerFrase();
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase}/>
      <button
        type="button"
        className="btn btn-dark btn-lg"
        onClick={obtenerFrase}
        >Obtener Frase
      </button>
    </Contenedor>
  );
}

export default App;
