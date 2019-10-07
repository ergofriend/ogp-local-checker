import React, { useState, useEffect } from "react";
import Styled from "styled-components";

// import '../node_modules/rsuite/lib/styles/index.less';
import { Nav, Form, FormGroup, InputGroup, Input, Icon, Loader } from "rsuite";

import Twitter from "../components/twitter";
import is_url from "../util/is_url"

const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isUrl, setIsUrl] = useState(true);
  const [url, setUrl] = useState("");
  const [ogp, setOGP] = useState({
    card: "summary",
    image: "https://tento.app/sns.png",
    title: "Tento - 集まろう！ 学生の新しいコミュニティー",
    description: "Tentoとは学生のみが利用する学生求人サイトです。あなたの興味のあるこや、やりたいことをみんなでシェアして取り組める!イベント開催告知から開発メンバー募集までなんでもあり！",
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
    <div className="App">
      <header className="App-header">
        <Nav >
          <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
            Home
          </Nav.Item>
          <Nav.Item eventKey="about">History</Nav.Item>
        </Nav>
      </header>
      <InputStyle>
        <Form fluid>
          <FormGroup>
        <InputGroup inside>
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
            <Twitter card={ogp.card} image={ogp.image} title={ogp.title} description={ogp.description} site={ogp.site}></Twitter>
          </FormGroup>
        </Form>
      </InputStyle>
    </div>
  );
};

const InputStyle = Styled.div`
  padding: 1rem 2rem;
`;

export default Index;
