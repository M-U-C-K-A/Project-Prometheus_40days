import React from 'react';

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(`Username: ${username}, Password: ${password}`);
    // Envoyer le formulaire à l'API backend ici
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom d'utilisateur:
        <input type="text" name="username" />
      </label>
      <label>
        Mot de passe:
        <input type="password" name="password" />
      </label>
      <button type="submit">Se connecter</button>
    </form>
  );
}

function App() {
  const handleClick = () => {
    console.log('The button has been clicked!');
  };

  return (
    <>
      <h1>My First React Component</h1>
      <pre>
        Click the button below to see a message in the console:
        <br />
        &gt; Look at the console and thanks for downloading my GitHub repository.
      </pre>
      <Button onClick={handleClick} text="Click me" />
      <LoginForm />
    </>
  );
}

export default App;
