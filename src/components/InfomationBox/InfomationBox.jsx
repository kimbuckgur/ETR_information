import React from "react";
import { useRecoilState } from "recoil";
import { OnAndOff } from "../State/state";
import * as S from "./styled";

const InfomationBox = () => {
  const [ETR_OnAndOff, setETR_OnAndOff] = useRecoilState(OnAndOff);

  return (
    <S.InfomationBox>
      {ETR_OnAndOff ? (
        <div></div>
      ) : (
        <S.NoneTextBox>
          <S.NoneText>검색 결과 없음</S.NoneText>
        </S.NoneTextBox>
      )}
    </S.InfomationBox>
  );
};

export default InfomationBox;
