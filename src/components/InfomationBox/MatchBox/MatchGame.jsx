import React, { useEffect } from "react";
import { cArray } from "../../../assets/CArray";
import arrow_low from "../../../assets/svg/arrow_low.svg";
import * as S from "../ViewBox/styled";

const MatchGame = ({ x }) => {
  let Team = "";
  if (x.matchingTeamMode == 1) {
    Team = "Solo";
  } else if (x.matchingTeamMode == 2) {
    Team = "Duo";
  } else {
    Team = "Squad";
  }

  return (
    <>
      <S.MatchGameBox>
        <S.MaGaArrowAria>
          <S.MaGaArrowBox>
            <img src={arrow_low} />
          </S.MaGaArrowBox>
        </S.MaGaArrowAria>
        <S.MaGaLine />
        <S.MaGaTextBox>
          <S.MaGaRankingTextBox>
            <S.MaGaRankingText>{x.gameRank}위</S.MaGaRankingText>
            <S.MaGaTellText>
              {x.matchingMode == 2 ? <>Nomal</> : <>Rank</>}
            </S.MaGaTellText>
          </S.MaGaRankingTextBox>
          <S.MaGaTextBoxLine />
          <S.MaGaTimeText>13일전</S.MaGaTimeText>
        </S.MaGaTextBox>
        <S.MaGaTeamModeTextAria w="90px">
          <S.MaGaTeamModeText>{Team}</S.MaGaTeamModeText>
        </S.MaGaTeamModeTextAria>
        <S.MaGaIMGBox>
          <S.MaGaLevelBox>
            <S.MaGaLevel>{x.characterLevel}</S.MaGaLevel>
          </S.MaGaLevelBox>
          <S.MaGaIMG />
        </S.MaGaIMGBox>
        <S.MaGaCharacteristicBox>
          <S.MaGaCharacteristic />
          <S.MaGaCharacteristic />
        </S.MaGaCharacteristicBox>
        <S.MaGaGuideLine />
        <S.MaGaTeamModeTextAria w="70px">
          <S.MaGaTextAria>
            <S.MaGaSubTitle>K/D/H</S.MaGaSubTitle>
            <S.MaGaText>
              {x.playerKill}/{x.playerAssistant}/{x.monsterKill}
            </S.MaGaText>
          </S.MaGaTextAria>
        </S.MaGaTeamModeTextAria>
        <S.MaGaSubLine />
        <S.MaGaTeamModeTextAria w="70px">
          <S.MaGaTextAria>
            <S.MaGaSubTitle>Route</S.MaGaSubTitle>
            <S.MaGaText>{x.routeIdOfStart}</S.MaGaText>
          </S.MaGaTextAria>
        </S.MaGaTeamModeTextAria>
      </S.MatchGameBox>
      <S.MatchGameLine />
    </>
  );
};

export default MatchGame;
