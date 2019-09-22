import React, { useState, useEffect } from "react";
import Styled from "styled-components";

import "rsuite/dist/styles/rsuite-default.css";
import { Button, InputGroup, Input, Icon } from "rsuite";

import Twitter from "../components/twitter";

const Index: React.FC = () => {
  const [result, setResult] = useState({
    header: null,
    status: "loading",
    error: null
  });
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(url, { mode: "no-cors" })
      .then(response => {
        console.log("response:", response);
        return response.json();
      })
      .then(response =>
        setResult({ header: response, status: "loaded", error: null })
      )
      .catch((error: any) =>
        setResult({ header: null, status: "error", error: error })
      );
    console.log(result);
  }, [result, setUrl, url]);

  return (
    <div className="App">
      <header className="App-header">
        <p>You can confirm the SNS OGP with the local computer.</p>
      </header>
      <iframe title="test" src={url} height="100px"></iframe>
      <InputStyle>
        <InputGroup inside>
          <Input
            name="url"
            onChange={value => {
              setUrl(value as string);
              console.log(value);
            }}
          />
          <InputGroup.Button>
            <Icon icon="search" />
          </InputGroup.Button>
        </InputGroup>
      </InputStyle>
      <Twitter></Twitter>
      <Button appearance="primary"> Hello world </Button>
    </div>
  );
};

const InputStyle = Styled.div`
  width: 60vw;
`;

export default Index;
