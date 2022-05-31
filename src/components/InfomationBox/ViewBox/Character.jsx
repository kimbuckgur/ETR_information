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
      <div></div>
    </S.CharacterBox>
  );
};

export default Character;
