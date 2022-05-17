import React, { useState } from "react";
import { UserState } from "../../State/state";
import { useRecoilState } from "recoil";
import * as S from "./styled";

const StatsBox = ({ GetStats }) => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [seasonNumber, setSeasonNumber] = useState([1, 2, 3, 4, 5]);

  const SeasonNumberOnChange = (e) => {
    const { SeasonState } = userState;
    GetStats();
    setUserState({ ...useState, [SeasonState]: e.target.value });
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
      <S.SeasonBox>
        <S.SeasonTitle>시즌</S.SeasonTitle>
        <S.SeasonSelect onChange={SeasonNumberOnChange}>
          <option value={0}>일반</option>
          {SeasonOptionMap}
        </S.SeasonSelect>
        <S.GuideLine w="1px" h="20px" />
        <S.TeamModeTitle>팀 모드</S.TeamModeTitle>
        <S.SeasonSelect>
          <option value={1}>솔로</option>
          <option value={2}>듀오</option>
          <option value={3}>스쿼드</option>
        </S.SeasonSelect>
      </S.SeasonBox>
    </S.StatsBox>
  );
};

export default StatsBox;
