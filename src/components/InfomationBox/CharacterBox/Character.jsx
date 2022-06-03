import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserState, UserStatistics, ChraterState } from "../../State/state";
import { cArray, nArray } from "../../../assets/CArray";
import * as S from "../ViewBox/styled";

const Character = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [chraterState, setChraterState] = useRecoilState(ChraterState);

  console.log(chraterState);

  const ChraterStateMap = chraterState.map((x, index) => {
    return (
      <S.CharacterBoxCharacterAria key={index}>
        <S.CharacterBoxCharacter>
          <S.CharacterBoxImg src={cArray[x.characterCode]} />
          <S.CharacterBoxNameAria>
            <S.CharacterBoxValue l="0px" We="800">
              {nArray[x.characterCode]}
            </S.CharacterBoxValue>
          </S.CharacterBoxNameAria>
          <S.CharacterBoxTextAria>
            <S.CharacterBoxValue We="300" l="0px">
              {x ? x.totalGames : <></>}
            </S.CharacterBoxValue>
          </S.CharacterBoxTextAria>
          <S.CharacterBoxTextAria>
            <S.CharacterBoxValue We="300" l="0px">
              {x ? x.maxKillings : <></>}
            </S.CharacterBoxValue>
          </S.CharacterBoxTextAria>
        </S.CharacterBoxCharacter>
      </S.CharacterBoxCharacterAria>
    );
  });

  return <>{ChraterStateMap}</>;
};

export default Character;
