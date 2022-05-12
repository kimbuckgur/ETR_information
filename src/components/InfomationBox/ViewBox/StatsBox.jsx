import React, { useState } from "react";
import * as S from "./styled";

const StatsBox = () => {
  const [seasonNumber, setSeasonNumber] = useState([
    {
      season: 1,
      active: false,
    },
    {
      season: 2,
      active: false,
    },
    {
      season: 3,
      active: false,
    },
    {
      season: 4,
      active: false,
    },
    {
      season: 5,
      active: false,
    },
    {
      season: 6,
      active: false,
    },
  ]);

  const SeasonNumberClick = (e) => {
    const { id } = e.target;
    setSeasonNumber(
      seasonNumber.map((x, index) => {
        return id == x.season ? { ...seasonNumber, active: !x.active } : x;
      })
    );
  };

  const SeasonNumberMap = seasonNumber.map((x, index) => {
    let num = x.season;
    let bool = x.active;
    return bool ? (
      <S.SeasonNumberBoxOn onClick={SeasonNumberClick} key={index} id={num}>
        {num}
      </S.SeasonNumberBoxOn>
    ) : (
      <S.SeasonNumberBoxOff onClick={SeasonNumberClick} key={index} id={num}>
        {num}
      </S.SeasonNumberBoxOff>
    );
  });

  return (
    <S.StatsBox>
      <S.SeasonBox>
        <S.SeasonTitle>시즌</S.SeasonTitle>
        {SeasonNumberMap}
      </S.SeasonBox>
    </S.StatsBox>
  );
};

export default StatsBox;
