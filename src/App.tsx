import React from "react";
import "./App.css";

import "rsuite/dist/styles/rsuite-default.css";
import { Button } from "rsuite";

import Twitter from "./components/twitter";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>You can confirm the SNS OGP with the local computer.</p>
      </header>
      <Twitter></Twitter>
      <Button appearance="primary"> Hello world </Button>
    </div>
  );
};

export default App;
