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

  const SeasonNumberMap = seasonNumber.map((x, index) => {
    let bool = x.active;
    return bool ? (
      <S.SeasonNumberBoxOn>{x.season}</S.SeasonNumberBoxOn>
    ) : (
      <S.SeasonNumberBoxOff>{x.season}</S.SeasonNumberBoxOff>
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
