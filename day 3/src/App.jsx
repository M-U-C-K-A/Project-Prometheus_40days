import React from 'react';
import Carte from './Carte';

function App() {
  return (
    <div>
    <Carte 
      titre="Mon premier titre de carte" 
      description="Ceci est une description de ma carte." 
      image="https://via.placeholder.com/150/FFC300" 
    />
      <Carte 
        titre="Mon deuxieme titre de carte" 
        description="Ceci est une description de l'une de mes deux carte." 
        image="https://via.placeholder.com/130x100/FF5733" 
      />
    </div>
  );
}

export default App;
