import React from "react";
import Styled from "styled-components";

const Twitter: React.FC = () => {
  const isLaerge: boolean = false;

  return (
    <TwitterStyle>
      <ImgStyle
        src="https://ogimage.blog.st-hatena.com/17680117127217083877/26006613430980642/1568885719"
        alt=""
      />
      <ContentStyle>
        <TitleStyle>はてなサマーインターン 皇紀2679年の夏</TitleStyle>
        <p>
          まだ蝉の声が耳に突き刺さる暑い夏の日だった。その夜僕は、インターンへの参加を決めた。
          晴天による暑さが脳裏に焼き...
        </p>
        <p>ergofriend.hatenablog.com</p>
      </ContentStyle>
    </TwitterStyle>
  );
};

const TwitterStyle = Styled.div`
  width: 600px;
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
