import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserState, UserStatistics } from "../../State/state";
import * as S from "../ViewBox/styled";

const ModeBox = ({ GetStats }) => {
  let data = 0;
  const [userState, setUserState] = useRecoilState(UserState);
  const [userStatistics, setUserStatistics] = useRecoilState(UserStatistics);
  const [seasonNumber, setSeasonNumber] = useState([1, 2, 3, 4, 5, 6]);

  const GetRank = (mmr) => {
    if (mmr == undefined) {
      return "";
    } else if (mmr < 400) {
      return "iron";
    } else if (mmr >= 400 && mmr < 800) {
      return "bronze";
    } else if (mmr >= 800 && mmr < 1200) {
      return "silver";
    } else if (mmr >= 1200 && mmr < 1600) {
      return "gold";
    } else if (mmr >= 1600 && mmr < 2000) {
      return "platinum";
    } else if (mmr >= 2000 && mmr < 2400) {
      return "diamond";
    } else if (mmr >= 2400 && mmr < 2600) {
      return "titan";
    } else if (mmr > 2600) {
      return "eter";
    }
  };

  const SeasonOnChange = (e) => {
    data = e.target.value;
    setUserState({ ...userState, SeasonState: e.target.value });
    GetStats(data);
  };

  const TeamModeOnChange = (e) => {
    setUserState({ ...userState, TeamModeState: e.target.value });
    if (userStatistics[e.target.value - 1]) {
      setUserState({
        ...userState,
        Rank: GetRank(userStatistics[e.target.value - 1].mmr),
      });
    } else {
      setUserState({
        ...userState,
        Rank: 10,
      });
    }
  };

  const SeasonOptionMap = seasonNumber.map((x, index) => {
    return (
      <option key={index} value={x}>
        {x} 시즌
      </option>
    );
  });

  return (
    <S.ModeBox>
      <S.SeasonTitle>시즌</S.SeasonTitle>
      <S.SeasonSelect name="SeasonState" onChange={SeasonOnChange}>
        <option value={0}>일반</option>
        {SeasonOptionMap}
      </S.SeasonSelect>
      <S.GuideLine w="1px" h="20px" />
      <S.TeamModeTitle>팀 모드</S.TeamModeTitle>
      <S.SeasonSelect name="TeamModeState" onChange={TeamModeOnChange}>
        <option value={1}>솔로</option>
        <option value={2}>듀오</option>
        <option value={3}>스쿼드</option>
      </S.SeasonSelect>
      <S.SeasonTitle>
        {userStatistics[0] ? userStatistics[0].nickname : <></>} 님의 게임 전적
      </S.SeasonTitle>
    </S.ModeBox>
  );
};

export default ModeBox;
