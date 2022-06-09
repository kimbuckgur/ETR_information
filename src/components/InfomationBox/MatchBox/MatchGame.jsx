import React from "react";
import * as S from "../ViewBox/styled";

const MatchGame = () => {
  return (
    <S.MatchGameBox>
      <S.MaGaLine />
      <S.MaGaTextBox>
        <S.MaGaRankingTextBox>
          <S.MaGaRankingText>13위</S.MaGaRankingText>
          <S.MaGaTellText>Rank</S.MaGaTellText>
        </S.MaGaRankingTextBox>
        <S.MaGaTextBoxLine />
        <S.MaGaTimeText>13일전</S.MaGaTimeText>
      </S.MaGaTextBox>
    </S.MatchGameBox>
  );
};

export default MatchGame;
