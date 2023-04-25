import React from 'react';

function Carte(props) {
  return (
    <div style={{border: '1px solid black', padding: '10px'}}>
      <h2>{props.titre}</h2>
      <p>{props.description}</p>
      <img src={props.image} alt={props.titre} />
    </div>
  );
}

export default Carte;
