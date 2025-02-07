import styled from "styled-components";

export const Envelope = styled.div`
  position: absolute;
  left: 0;
  margin-left: 50px;
  top: 0;
  margin-top: 10vh;
`;

export const Card = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 1.5s;
  background: #fbcad6;

  &.flipped {
    transform: rotateY(180deg);
  }

  @media (max-width: 602px) {
    &::after {
      content: "Sorry, you'll need a bigger screen to use this. If you're on a phone, you could try tilting it 🙃";
      position: absolute;
      width: 280px;
      margin: 10vh auto;
      font-size: 22px;
      text-align: center;
      color: #ff7676;
      background-color: #fbfbfb;
      line-height: 30px;
      padding: 40px 30px;
      border-radius: 8px;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      border-style: solid;
      border-width: 10px 10px 0;
    }
  }
`;

export const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #f60606;
  backface-visibility: hidden;
  background: #fbcad6;
  transform: rotateY(0deg);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #f60606;
  backface-visibility: hidden;
  background: #fbcad6;
  transform: rotateY(180deg);
`;

export const EnvImg = styled.img`
  position: absolute;
`;

export const StampImg = styled.img`
  position: absolute;
  top: 0;
  width: 80px;
  height: 80px;
  margin: 20px 20px 0 0;
`;

export const To = styled.h1`
  margin: 40px 85px 0 0;
  font-family: Limelight;
  font-size: 60px;
  text-decoration: underline dotted pink 4px;
`;

export const Heart = styled.img`
  position: absolute;
  top: 160px;
  margin: 28px;
  filter: blur(0.3px);
`;
