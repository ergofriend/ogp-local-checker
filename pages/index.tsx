import React, { useState, useEffect } from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic'
import Styled from "styled-components";

// import '../node_modules/rsuite/lib/styles/index.less';
import { Nav, Form, FormGroup, InputGroup, Input, Icon, Loader } from "rsuite";
import { Grid, Row, Col } from 'rsuite';

import Twitter from "../components/twitter";
import History from "../components/history";
import is_url from "../util/is_url"
import OGPHistory from "../util/ogp_history"

const Index: React.FC = () => {
  const ogpHistry = new OGPHistory();
  const [loading, setLoading] = useState(false);
  const [isUrl, setIsUrl] = useState(true);
  const [url, setUrl] = useState("");
  const [ogp, setOGP] = useState({
    card: "summary",
    image: "https://licensecounter.jp/devops-hub/assets/images/products/logo-gitHubEnterprise680_500-1.png",
    title: "ローカルでOGPの確認が出来ます。",
    description: "みんなでコミットしよう！",
    site: "location.hostname"
  })

  useEffect(() => {
    // Update the document title using the browser API
    if (is_url(url)) {
      setIsUrl(true)
      setLoading(true)
      getInfo(url)
    } else {
      setIsUrl(false)
    }
  },[url]);

  const clearURL = () => {
    setUrl("")
  }

  const getHostname = (url: string) => {
    // use URL constructor and return hostname
    return new URL(url).hostname;
  }

  const setNewUrl = (newUrl: string) => {
    setUrl(newUrl)
  }

  const getInfo = async (url: string) => {
    const response = await fetch(location.href + "api?url=" + url)
    const ogp = await response.json();
    console.log("response:", ogp);
    const ogpData = {
      card: ogp.twitter_card,
      image: ogp.twitter_image ? ogp.twitter_image : ogp.og_image,
      title: ogp.og_title,
      description: ogp.og_description,
      site: getHostname(ogp.og_url ? ogp.og_url : ogp.url)
    }
    setOGP(ogpData)
    setLoading(false)
  }

  return (
    <div>
      <Head>
        <title key="title">OGP Local Checker</title>
        <meta name="description" content="ローカルのPCでOGPの確認が出来ますよ！"/>
      </Head>
      <div className="App">
        <header className="App-header">
          <Nav >
            <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
              Top
            </Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>
          </Nav>
        </header>
        <InputStyle>
          <Form fluid>
            <FormGroup>
              <InputDivStyle>
              <InputGroup inside >
            {(() => {
              return url.length > 0 ?
              <InputGroup.Button onClick={clearURL}>
                  <Icon icon="close" />
                </InputGroup.Button>
                : null
              }
              )()}
            <Input
              name="url"
              type="url"
              size="md"
              value={url}
              onChange={value => setUrl(value)}
              />
            {(() => {
              return loading
              ? <InputGroup.Button>
                <Loader content="Loading..." />
              </InputGroup.Button>
              : <InputGroup.Button>
                  <Icon icon="search" />
                </InputGroup.Button>
            })()}
              </InputGroup>
            </InputDivStyle>
              <Grid fluid>
                <Row className="show-grid">
                  <Col xs={24} sm={24} md={13}>
                    <Twitter card={ogp.card} image={ogp.image} title={ogp.title} description={ogp.description} site={ogp.site}></Twitter>
                  </Col>
                  <Col xs={24} sm={24} md={11}>
                    <History emitter={setNewUrl} image={ogp.image} title={ogp.title} description={ogp.description} site={ogp.site} url={url}></History>
                  </Col>
                </Row>
              </Grid>
            </FormGroup>
          </Form>
        </InputStyle>
      </div>
    </div>
  );
};

const InputDivStyle = Styled.div`
  margin: 0 2rem;
`;

const InputStyle = Styled.div`
  padding: 1rem 2rem;
`;

export default Index;
