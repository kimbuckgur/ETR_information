import React, { useEffect } from "react";
import { cArray } from "../../../assets/CArray";
import arrow_low from "../../../assets/svg/arrow_low.svg";
import arrow_high from "../../../assets/svg/arrow_high.svg";
import MaOneSession from "./MaOneSession";
import MaTwoSession from "./MaTwoSession";
import * as S from "../ViewBox/styled";

const MatchGame = ({ x, DetailOnOff }) => {
  let Team = "";
  let Date = "";

  Date = x.startDtm.slice(0, 10);

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
          <S.MaGaArrowBox onClick={DetailOnOff} name={x.id}>
            <img src={x.onAndoff ? arrow_high : arrow_low} name={x.id} />
          </S.MaGaArrowBox>
        </S.MaGaArrowAria>
        <S.MaGaLine />
        <S.MaGaTextBox>
          {x.gameRank == 1 ? (
            <S.MaGaRankingText c="#0A4595;">{x.gameRank}위</S.MaGaRankingText>
          ) : (
            <S.MaGaRankingText c="#343434;">{x.gameRank}위</S.MaGaRankingText>
          )}
          <S.MaGaTellText>
            {x.matchingMode == 2 ? <>Nomal</> : <>Rank</>}
          </S.MaGaTellText>
        </S.MaGaTextBox>
        <S.MaGaTeamModeTextAria w="90px">
          <S.MaGaTeamModeText>{Team}</S.MaGaTeamModeText>
        </S.MaGaTeamModeTextAria>
        <S.MaGaIMGBox>
          <S.MaGaLevelBox>
            <S.MaGaLevel>{x.characterLevel}</S.MaGaLevel>
          </S.MaGaLevelBox>
          <S.MaGaIMGDiv>
            <S.MaGaIMG src={cArray[x.characterNum]} />
          </S.MaGaIMGDiv>
        </S.MaGaIMGBox>
        <S.MaGaCharacteristicBox>
          <S.MaGaCharacteristic />
          <S.MaGaCharacteristic />
        </S.MaGaCharacteristicBox>
        <S.MaGaGuideLine />
        <S.MaGaSortTextAria w="80px">
          <S.MaGaTextAria>
            <S.MaGaSubTitle>K/A/H</S.MaGaSubTitle>
            <S.MaGaText>
              {x.playerKill}/{x.playerAssistant}/{x.monsterKill}
            </S.MaGaText>
          </S.MaGaTextAria>
        </S.MaGaSortTextAria>
        <S.MaGaSubLine />
        <S.MaGaSortTextAria w="80px">
          <S.MaGaTextAria>
            <S.MaGaSubTitle>Route</S.MaGaSubTitle>
            <S.MaGaText>
              {x.routeIdOfStart == 0 ? <>custom</> : x.routeIdOfStart}
            </S.MaGaText>
          </S.MaGaTextAria>
        </S.MaGaSortTextAria>
      </S.MatchGameBox>
      {x.onAndoff ? (
        <S.MatchGameDetails>
          <S.MaGaDeTimeBox>
            <S.MaGaDeTime>{Date}</S.MaGaDeTime>
          </S.MaGaDeTimeBox>
          <S.MaGaDeTimeBox></S.MaGaDeTimeBox>
          <S.MaGaDeTitle>스킬/통계</S.MaGaDeTitle>
          <S.MaGaDeSkillBox>{}</S.MaGaDeSkillBox>
          <MaOneSession x={x} />
          <MaTwoSession x={x} />
        </S.MatchGameDetails>
      ) : (
        <></>
      )}
      <S.MatchGameLine />
    </>
  );
};

export default MatchGame;
