import React from "react";
import { UserState, UserStatistics } from "../../State/state";
import { useRecoilState } from "recoil";
import { unRank } from "../../../assets/RankImg";
import * as S from "../ViewBox/styled";

const Rank = () => {
  return (
    <S.RankIMGBox>
      <S.RankIMGDiv>
        <S.RankIMG src={unRank} />
      </S.RankIMGDiv>
      <S.RankName>언랭크</S.RankName>
    </S.RankIMGBox>
  );
};

export default Rank;
