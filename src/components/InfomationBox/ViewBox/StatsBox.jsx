import React, { useState } from "react";
import { SeasonState } from "../../State/state";
import { useRecoilState } from "recoil";
import * as S from "./styled";

const StatsBox = () => {
  const [seasonState, setSeasonState] = useRecoilState(SeasonState);
  const [seasonNumber, setSeasonNumber] = useState([0, 1, 2, 3, 4, 5]);

  const SeasonNumberOnChange = (e) => {
    setSeasonState(e.target.value);
  };

  const SeasonOptionMap = seasonNumber.map((x) => {
    return (
      <option key={x} value={x}>
        {x == 0 ? 일반 : { x } `시즌` }
      </option>
    );
  });

  return (
    <S.StatsBox>
      <S.SeasonBox>
        <S.SeasonTitle>시즌</S.SeasonTitle>
        <S.SeasonSelect onChange={SeasonNumberOnChange}>
          <option selected>시즌</option>
          {SeasonOptionMap}
        </S.SeasonSelect>
      </S.SeasonBox>
    </S.StatsBox>
  );
};

export default StatsBox;
