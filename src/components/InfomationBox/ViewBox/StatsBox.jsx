import React, { useEffect, useState } from "react";
import ModeBox from "../StatsBox/ModeBox";
import OneSession from "../StatsBox/OneSession";
import TwoSession from "../StatsBox/TwoSession";
import Rank from "../StatsBox/Rank";
import * as S from "./styled";
import ThreeSession from "../StatsBox/ThreeSession";

const StatsBox = ({ GetStats }) => {
  return (
    <S.StatsBox>
      <ModeBox GetStats={GetStats} />
      <S.SessionBox>
        <OneSession />
        <S.GuideLine w="1px" h="90px" />
        <TwoSession />
        <S.GuideLine w="1px" h="90px" />
        <Rank />
        <ThreeSession />
      </S.SessionBox>
    </S.StatsBox>
  );
};

export default StatsBox;
