import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { UserState, UserStatistics, ChraterState } from "../../State/state";
import * as S from "./styled";

const Character = ({ GetStats }) => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [chraterState, setChraterState] = useRecoilState(ChraterState);

  useEffect(() => {
    GetStats();
  }, [userState.SeasonState]);

  return (
    <S.CharacterBox>
      <S.ChraterBoxTitle>캐릭터 통계</S.ChraterBoxTitle>
      <S.CharacterBoxLine />
      <S.CharacterBoxTextFlex>
        <S.CharacterBoxText style={{"margin-right":"60px"}}>캐릭터</S.CharacterBoxText>
        <S.CharacterBoxTextAria>
          <S.CharacterBoxText>최다 킬</S.CharacterBoxText>
        </S.CharacterBoxTextAria>
        <S.CharacterBoxTextAria>
          <S.CharacterBoxText>플레이 횟수</S.CharacterBoxText>
        </S.CharacterBoxTextAria>
      </S.CharacterBoxTextFlex>
      <S.GuideLine l="10px" w="280px" h="1px"/>
    </S.CharacterBox>
  );
};

export default Character;
