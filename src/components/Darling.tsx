import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LetContainer,
  Letter,
  LetTitle,
  LetP,
  Buttons,
  ButtOne,
  ButtTwo,
  YesButton,
} from "../components/style/darling-style";
import NoButton from "./Button";

const Darling: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/date");
  };

  const handleNoClick = () => {
    alert("Well ok, have a nice day then!");
    window.close();
  };

  return (
    <LetContainer style={{ boxShadow: "0" }}>
      <Letter>
        <LetTitle style={{ fontSize: "32px", marginTop: "40px" }}>
          {" "}
          My dearest Ronke,
        </LetTitle>
        <LetP style={{ fontSize: "18px" }}>
          From the moment you came into my life, every day has felt brighter,
          warmer, and more beautiful. Your smile lights up my world, and your
          love fills my heart in ways I never thought possible. As Valentine's
          Day approaches, I can't imagine spending it with anyone but you.
          <br />
          <br />
          Will you do me the honor of being my Valentine? Not just for this day,
          but for every day that follows? You are my everything, and I want to
          celebrate this special day with the one who means the most to me
          forever
          <br />
          <br />
          With all my love
          <br />
          Taiwo Abereoje
          <br />
          <br />
          <br />
          P.S i dare you to say no
        </LetP>
        <Buttons>
          <ButtOne>
            <YesButton onClick={handleClick}> YES </YesButton>
          </ButtOne>

          <ButtTwo>
            <NoButton onClick={handleNoClick} closeWindow={true}>
              {" "}
              NO{" "}
            </NoButton>
          </ButtTwo>
        </Buttons>
      </Letter>
    </LetContainer>
  );
};

export default Darling;
