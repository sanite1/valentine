import React from "react";
import { useLocation } from "react-router-dom";
import CaptureIt from "./Capture";
import {
  SumContainer,
  SumLetter,
  DateHead,
  DateBigP,
  DateP,
  DateTinyP,
} from "./style/date-style";

interface FormData {
  myName: string;
  toName: string;
  message: string;
  where: string;
  selectedOption: string;
  tel: number;
  selectedTime: string;
}

const ItsADate: React.FC = () => {
  const location = useLocation();
  const formData: FormData = (location.state as { formData: FormData })
    ?.formData;

  // if (!formData) {
  //   return <div>Form data not available</div>;
  // }

  return (
    <SumContainer>
      <SumLetter id="captureArea">
        <DateHead
          style={{ marginBottom: "50px", fontWeight: 700, fontSize: "32px" }}
        >
          It's a YES!
        </DateHead>

        <DateTinyP
          style={{ marginBottom: "50px", fontWeight: 500, fontSize: "18px" }}
        >
          I would love to be your Valentine🥰
        </DateTinyP>

        <DateBigP>
          Yours sincerely, <br />
          The Love Of Your Life!
        </DateBigP>

        <CaptureIt captureAreaId="captureArea" />
      </SumLetter>
    </SumContainer>
  );
};

export default ItsADate;
