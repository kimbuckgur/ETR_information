import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { ETR_Infomation, UserState, UserMatchs } from "../../State/state";
import MatchGame from "../MatchBox/MatchGame";
import * as S from "./styled";

const MatchBox = () => {
  const [userMatchs, setUserMatch] = useRecoilState(UserMatchs);

  useEffect(() => {
    console.log(userMatchs);
  });

  const TestOnOff = (e) => {
    setUserMatch(
      userMatchs.map((x, index) =>
        e.target.name == index ? { ...x, onAndoff: !x.onAndoff } : x
      )
    );
  };

  const userMatchsMap = userMatchs.map((x, index) => {
    if (index < 10) {
      return <MatchGame TestOnOff={TestOnOff} x={x} key={index} />;
    }
  });

  return <S.MatchBox>{userMatchs ? <>{userMatchsMap}</> : <></>}</S.MatchBox>;
};

export default MatchBox;
