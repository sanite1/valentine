import styled from "styled-components";

// generall containers
export const SumContainer = styled.div`
  position: absolute;
  left: 0;
  margin-left: 50px;
  top: 0;
  margin-top: 10vh;
`;

// basic styling for the letter
export const SumLetter = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  background-color: #fbfbfb;
  width: 470px;
  height: 600px;
`;

// fontstyling
export const DateHead = styled.h4`
  font-family: Limelight;
  font-size: 35px;
  font-weight: 300;
  margin: 55px 0 0 50px;
  color: #ff7676;
`;
export const DateBigP = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 15px 50px;
  color: #ff7676;
`;

export const DateP = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 10px 50px;
  color: #ff7676;
`;

export const DateTinyP = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin: -10px 50px 20px;
  color: #ff7676;
`;
