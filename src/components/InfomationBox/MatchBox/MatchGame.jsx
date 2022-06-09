import React from "react";
import arrow_low from "../../../assets/svg/arrow_low.svg";
import * as S from "../ViewBox/styled";

const MatchGame = () => {
  return (
    <S.MatchGameBox>
      <S.MaGaArrowAria>
        <S.MaGaArrowBox>
          <img src={arrow_low} />
        </S.MaGaArrowBox>
      </S.MaGaArrowAria>
      <S.MaGaLine />
      <S.MaGaTextBox>
        <S.MaGaRankingTextBox>
          <S.MaGaRankingText>13위</S.MaGaRankingText>
          <S.MaGaTellText>Rank</S.MaGaTellText>
        </S.MaGaRankingTextBox>
        <S.MaGaTextBoxLine />
        <S.MaGaTimeText>13일전</S.MaGaTimeText>
      </S.MaGaTextBox>
      <S.MaGaIMGBox>
        <S.MaGaLevelBox>
          <S.MaGaLevel>12</S.MaGaLevel>
        </S.MaGaLevelBox>
        <S.MaGaIMG />
      </S.MaGaIMGBox>
      <S.MaGaCharacteristicBox>
        <S.MaGaCharacteristic />
        <S.MaGaCharacteristic />
      </S.MaGaCharacteristicBox>
      <S.MaGaGuideLine />
      <S.MaGaTextAria>
        <S.MaGaSubTitle>K/D/H</S.MaGaSubTitle>
        <S.MaGaText>12/1/32</S.MaGaText>
      </S.MaGaTextAria>
      <S.MaGaSubLine />
      <S.MaGaTextAria>
        <S.MaGaSubTitle>Route</S.MaGaSubTitle>
        <S.MaGaText>849283</S.MaGaText>
      </S.MaGaTextAria>
    </S.MatchGameBox>
  );
};

export default MatchGame;
