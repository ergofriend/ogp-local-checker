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
      <p>はてなサマーインターン 皇紀2679年の夏</p>
      <p>
        まだ蝉の声が耳に突き刺さる暑い夏の日だった。その夜僕は、インターンへの参加を決めた。
        晴天による暑さが脳裏に焼き...
      </p>
      <p>ergofriend.hatenablog.com</p>
    </TwitterStyle>
  );
};

const TwitterStyle = Styled.div`
  width: 800px;
  border: solid 3px;
  border-radius: 25px;
  margin: 2rem;
	/* background-color: pink; */
	p {
		/* color: blue; */
	}
`;

const ImgStyle = Styled.img`
  width: 800px;
`;

export default Twitter;
