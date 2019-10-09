import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import OGPHistory from "../util/ogp_history"

const History: React.FC = () => {
  const ogpHistry = new OGPHistory();
  // ogpHistry.load();
  
  const [list, setList] = useState(ogpHistry.list);

  return (
    <StyleDiv>
      {/* { ogpHistry.load() } */}
      {list.length === 0 && <p>履歴はありません！</p> }
      {0 < list.length && (
        <ul>
          {
            list.map(history => <li>{history.title}</li>)
          }
        </ul>
      )}
    </StyleDiv>
  )
}

const StyleDiv = Styled.div`
  margin: 2rem;
`;

export default History;