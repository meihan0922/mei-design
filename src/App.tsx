import React from "react";
import Button from "./components/Button/button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          btnType="link"
          size="lg"
          disabled
          href="https://www.typescriptlang.org/docs/handbook/utility-types.html"
        >
          hello world
        </Button>
        <Button btnType="danger" size="lg" disabled>
          hello world
        </Button>
        <Button btnType="default" size="sm">
          hello world
        </Button>
        <Button btnType="primary">hello world</Button>
        <code>const a = &apos;b&apos;</code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
