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
        <DescriptionStyle>
          {props.description}
        </DescriptionStyle>
        <p>{props.site}</p>
      </ContentStyle>
    </TwitterStyle>
  );
};

const TwitterStyle = Styled.div`
  max-width: 510px;
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
  max-height: 266px;
  /* height: 330px; */
  object-fit: cover;
`;

const ContentStyle = Styled.div`
  max-height: 100px;
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

const DescriptionStyle = Styled.p`
  overflow: hidden;
  height: 2.8em;
  font-size: 14.9px;
  line-height: 1.4;

  position: relative;
  padding-right: 1em;
  overflow: hidden;
  &::before {
    content: "...";
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-block;
    width: 1em;
  }
  &::after {
    content: "";
    position: relative;
    right: -1em;
    float: right;
    width: 1em;
    height: 100%;
    background-color: inherit;
  }
`

export default Twitter;
