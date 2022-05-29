import React, { useEffect, useState } from "react";
import { UserState, UserStatistics } from "../../State/state";
import { useRecoilState } from "recoil";
import OneSession from "../StatsBox/OneSession";
import TwoSession from "../StatsBox/TwoSession";
import * as S from "./styled";

const StatsBox = ({ GetStats }) => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [userStatistics, setUserStatistics] = useRecoilState(UserStatistics);
  const [seasonNumber, setSeasonNumber] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    GetStats();
  }, [userState.SeasonState]);

  const TeamModeStateOnChange = (e) => {
    setUserState({ ...userState, TeamModeState: e.target.value });
  };

  const SeasonNumberOnChange = (e) => {
    setUserState({ ...userState, SeasonState: e.target.value });
  };

  const SeasonOptionMap = seasonNumber.map((x) => {
    return (
      <option key={x} value={x}>
        {x} 시즌
      </option>
    );
  });

  return (
    <S.StatsBox>
      <S.ModeBox>
        <S.SeasonTitle>시즌</S.SeasonTitle>
        <S.SeasonSelect onChange={SeasonNumberOnChange}>
          <option value={0}>일반</option>
          {SeasonOptionMap}
        </S.SeasonSelect>
        <S.GuideLine w="1px" h="20px" />
        <S.TeamModeTitle>팀 모드</S.TeamModeTitle>
        <S.SeasonSelect onChange={TeamModeStateOnChange}>
          <option value={1}>솔로</option>
          <option value={2}>듀오</option>
          <option value={3}>스쿼드</option>
        </S.SeasonSelect>
        <S.SeasonTitle>
          {userStatistics[0] ? userStatistics[0].nickname : <></>} 님의 게임
          전적
        </S.SeasonTitle>
      </S.ModeBox>
      <S.SessionBox>
        <OneSession />
        <S.GuideLine w="1px" h="90px" />
        <TwoSession/>
      </S.SessionBox>
    </S.StatsBox>
  );
};

export default StatsBox;
