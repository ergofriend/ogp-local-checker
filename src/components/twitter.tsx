import React from "react";
import Styled from "styled-components";

const Twitter: React.FC = () => {
  return (
    <TwitterStyle>
      <p>twitter sfc</p>
    </TwitterStyle>
  );
};

const TwitterStyle = Styled.div`
    background-color: pink;
    p {
        color: blue;
    }
`;

export default Twitter;
