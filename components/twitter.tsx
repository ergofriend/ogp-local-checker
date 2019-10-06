import React from "react";
import Styled from "styled-components";

type props =  {
  card: string;
  image: string;
  title: string;
  description: string;
  site: string;
}

const Twitter: React.FC<props> = props => {
  return (
    <TwitterStyle>
      <ImgStyle
        src={props.image}
        alt=""
      />
      <ContentStyle>
        <TitleStyle>{props.title}</TitleStyle>
        <p>
          {props.description}
        </p>
        <p>{props.site}</p>
      </ContentStyle>
    </TwitterStyle>
  );
};

const TwitterStyle = Styled.div`
  max-width: 600px;
  border-radius: .85714em;
  border-width: 1px;
  border-style: solid;
  border-color: #E1E8ED;
  border-radius: 25px;
  margin: 2rem;
	/* background-color: pink; */
	p {
		/* ${isLaerge => (isLaerge ? "color: white" : "color: black")}; */
	}
`;

const ImgStyle = Styled.img`
  /* padding: 1rem; */
  border-radius: 25px 25px 0 0;
  width: 100%;
  height: 330px;
  object-fit: cover; 
`;

const ContentStyle = Styled.div`
  padding-left: 1em;
  padding-right: 1em;
  padding: .75em;
  box-sizing: border-box;
  text-decoration: none;
  text-align: left;
  font-size: 14px;
  /* font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; */
  line-height: 1.3em;
`;

const TitleStyle = Styled.h2`
  font-weight: bold;
  font-size: 1em;
  margin: 0 0 .15em;
  max-height: 1.3em;
  line-height: 1.3em;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ltr;
  unicode-bidi: isolate;
`;

export default Twitter;
