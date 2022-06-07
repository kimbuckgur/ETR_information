import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserState, ChraterState } from "../../State/state";
import Character from "../CharacterBox/Character";
import * as S from "./styled";

const CharacterBox = ({ GetStats }) => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [chraterState, setChraterState] = useRecoilState(ChraterState);

  const testStyled = {
    marginRight: "60px",
  };

  useEffect(() => {
    GetStats();
  }, [userState.SeasonState]);

  return (
    <S.CharacterBox>
      <S.ChraterBoxTitle>캐릭터 통계</S.ChraterBoxTitle>
      <S.CharacterBoxLine />
      <S.CharacterBoxTextFlex>
        <S.CharacterBoxText style={testStyled}>캐릭터</S.CharacterBoxText>
        <S.CharacterBoxTextAria>
          <S.CharacterBoxText>최다 킬</S.CharacterBoxText>
        </S.CharacterBoxTextAria>
        <S.CharacterBoxTextAria>
          <S.CharacterBoxText>플레이 횟수</S.CharacterBoxText>
        </S.CharacterBoxTextAria>
      </S.CharacterBoxTextFlex>
      <S.GuideLine l="10px" w="280px" h="1px" />
      <Character />
    </S.CharacterBox>
  );
};

export default CharacterBox;
