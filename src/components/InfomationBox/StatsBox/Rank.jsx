import React, { useEffect, useState } from "react";
import { UserState, UserStatistics } from "../../State/state";
import { useRecoilState } from "recoil";
import {
  unRank,
  iron,
  bronze,
  silver,
  gold,
  platinum,
  diamond,
  eter,
  titan,
} from "../../../assets/RankImg";
import * as S from "../ViewBox/styled";

const Rank = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [userStatistics, setUserStatistics] = useRecoilState(UserStatistics);
  const [rankName, setRankName] = useState("언랭크");
  const [useImg, setUseImg] = useState(unRank);

  useEffect(() => {
    switch (userState.Rank) {
      case undefined:
        setUseImg(unRank);
        setRankName("언랭크");
        break;
      case "":
        setUseImg(unRank);
        setRankName("언랭크");
        break;
      case "iron":
        setUseImg(iron);
        setRankName("아이언");
        break;
      case "bronze":
        setUseImg(bronze);
        setRankName("브론즈");
        break;
      case "silver":
        setUseImg(silver);
        setRankName("실버");
        break;
      case "gold":
        setUseImg(gold);
        setRankName("골드");
        break;
      case "platinum":
        setUseImg(platinum);
        setRankName("플래티넘");
        break;
      case "diamond":
        setUseImg(diamond);
        setRankName("다이아");
        break;
      case "titan":
        setUseImg(titan);
        setRankName("데미갓");
        break;
      case "eter":
        setUseImg(eter);
        setRankName("이터니티");
        break;
    }
  }, [userState.Rank]);

  return (
    <S.RankIMGBox>
      <S.RankIMGDiv>
        <S.RankIMG src={useImg} />
      </S.RankIMGDiv>
      <S.RankName>{rankName}</S.RankName>
    </S.RankIMGBox>
  );
};

export default Rank;
