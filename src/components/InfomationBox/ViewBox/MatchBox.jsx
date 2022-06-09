import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { ETR_Infomation, UserState, UserMatchs } from "../../State/state";
import MatchGame from "../MatchBox/MatchGame";
import * as S from "./styled";

const MatchBox = () => {
  const [ETR_Info, setETR_Info] = useRecoilState(ETR_Infomation);
  const [userState, setUserState] = useRecoilState(UserState);
  const [userMatchs, setUserMatch] = useRecoilState(UserMatchs);

  return (
    <S.MatchBox>
      <MatchGame />
    </S.MatchBox>
  );
};

export default MatchBox;
