import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import OGPHistory from "../util/ogp_history"

import { List , FlexboxGrid } from 'rsuite';

type props = {
  image: string;
  title: string;
  description: string;
  site: string;
  url: string;
  emitter: any;
}

class History extends React.Component<props> {
  ogpHistry = new OGPHistory();

  componentWillReceiveProps(){
    console.log("prop has changed.")
    if (0 < this.props.title.length && this.props.title !== "ローカルでOGPの確認が出来ます。") {
      const newHistory = {
        title: this.props.title,
        description: this.props.description,
        image: this.props.image,
        site: this.props.site,
        url: this.props.url
      }
      this.ogpHistry.add(newHistory);
    }
  }

  componentDidMount(){
    const data = window.localStorage.getItem("history") || "[]";
    this.ogpHistry.load(JSON.parse(data));
    console.log("history list: ", JSON.parse(data));
  }

  render(){
    return (
      <StyleDiv>
        {/* { ogpHistry.load() } */}
        {this.ogpHistry.list.length === 0 && <p>履歴はありません！</p>}
        {0 < this.ogpHistry.list.length && (
        <List hover>
            {this.ogpHistry.list.map((item, index) =>
              <List.Item key={item.ulid} index={index} onClick={this.props.emitter(item.url)}>
              <FlexboxGrid>
                {/*icon*/}
                  <FlexboxGrid.Item colspan={6} style={{

                  }}>
                    <img src={item.image} alt="" style={{ width: '100%', objectFit: 'cover'}}/>
                </FlexboxGrid.Item>
                {/*base info*/}
                  <FlexboxGrid.Item style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '60px',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    overflow: 'hidden'
                }}>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                  <div>{item.site}</div>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </List.Item>
          )}
          </List>
        )}
      </StyleDiv>
    )
  }
}

const StyleDiv = Styled.div`
  margin: 2rem;
`;

export default History;