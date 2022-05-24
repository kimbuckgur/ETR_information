import React, { useEffect, useState } from "react";
import { UserState, UserMatch } from "../../State/state";
import { useRecoilState } from "recoil";
import * as S from "./styled";

const StatsBox = ({ GetStats }) => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [userMatch, setUserMatch] = useRecoilState(UserMatch);
  const [seasonNumber, setSeasonNumber] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    GetStats();
  }, [userState.SeasonState]);

  const TeamModeStateOnChange = (e) => {
    setUserState({ ...userState, TeamModeState: e.target.value });
  };

  const SeasonNumberOnChange = (e) => {
    console.log(e.target.value);
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
        <S.TeamModeTitle onChange={TeamModeStateOnChange}>
          팀 모드
        </S.TeamModeTitle>
        <S.SeasonSelect>
          <option value={1}>솔로</option>
          <option value={2}>듀오</option>
          <option value={3}>스쿼드</option>
        </S.SeasonSelect>
      </S.ModeBox>
      <S.UserStatsAria>
        <S.UserStatsTextBox>
          <S.UserStatsText>플레이한 게임</S.UserStatsText>
          <S.UserStatsReply>{userMatch[0].mmr}</S.UserStatsReply>
        </S.UserStatsTextBox>
      </S.UserStatsAria>
    </S.StatsBox>
  );
};

export default StatsBox;
