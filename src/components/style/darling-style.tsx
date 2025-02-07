import styled from "styled-components";

export const LetContainer = styled.div`
  position: absolute;
  left: 0;
  margin-left: 50px;
  top: 0;
  margin-top: 10vh;
`;

export const Letter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
  width: 470px;
  height: 600px;
`;

export const LetTitle = styled.h1`
  font-family: Limelight;
  font-size: 55px;
  font-weight: 300;
  margin: 80px 0 0 50px;
  color: #ff7676;
`;

export const LetP = styled.p`
  font-size: 30px;
  font-weight: 300;
  margin: 40px 50px;
  color: #ff7676;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: -21%;
  margin-top: 30px;
`;

export const ButtOne = styled.div`
  margin: 18px;
`;

export const ButtTwo = styled.div`
  margin: 18px;
`;

export const YesButton = styled.button`
  background-color: #fbcad6;
  color: #ff7676;
  width: 100px;
  padding: 6px;
  font-size: 22px;
  font-family: Limelight;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
  border: none;
  border-radius: 8px;

  &:hover {
    color: #ff7676;
  }
`;

export const NopeButton = styled.button`
  position: absolute;
  background-color: #fbcad6;
  color: #ff7676;
  width: 100px;
  padding: 6px;
  font-size: 22px;
  font-family: Limelight;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
  border: none;
  border-radius: 8px;

  &:hover {
    color: #ff7676;
  }
`;
