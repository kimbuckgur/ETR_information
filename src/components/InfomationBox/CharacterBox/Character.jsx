import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserState, UserStatistics, ChraterState } from "../../State/state";
import * as S from "../ViewBox/styled";

const Character = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [chraterState, setChraterState] = useRecoilState(ChraterState);

  
  return (
    <S.CharacterBoxCharacterAria>
      <S.CharacterBoxCharacter>
        <S.CharacterBoxImg />
        <S.CharacterBoxValue l="10px" We="800">
          실비아
        </S.CharacterBoxValue>
        <S.CharacterBoxTextAria l="21px">
          <S.CharacterBoxValue We="300" l="0px">
            1
          </S.CharacterBoxValue>
        </S.CharacterBoxTextAria>
        <S.CharacterBoxTextAria l="0px">
          <S.CharacterBoxValue We="300" l="0px">
            51
          </S.CharacterBoxValue>
        </S.CharacterBoxTextAria>
      </S.CharacterBoxCharacter>
    </S.CharacterBoxCharacterAria>
  );
};

export default Character;
