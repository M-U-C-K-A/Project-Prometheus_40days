function Button(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.text}
    </button>
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
      <Button onClick={handleClick} text="Click me"></Button>
    </>
  );
}

export default App;
