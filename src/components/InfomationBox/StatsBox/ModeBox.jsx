import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserState, UserStatistics } from "../../State/state";
import * as S from "../ViewBox/styled";

const ModeBox = ({ GetStats }) => {
  let data = 0;
  const [userState, setUserState] = useRecoilState(UserState);
  const [userStatistics, setUserStatistics] = useRecoilState(UserStatistics);
  const [seasonNumber, setSeasonNumber] = useState([1, 2, 3, 4, 5, 6]);

  const SeasonOnChange = (e) => {
    data = e.target.value;
    setUserState({ ...userState, SeasonState: e.target.value });
    GetStats(data);
  };

  const TeamModeOnChange = (e) => {
    setUserState({ ...userState, TeamModeState: e.target.value });
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
