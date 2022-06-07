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

  const GetBatttleRecord = () => {
    axios({
      method: "GET",
      url: `${ETR_Info.url}/v1/user/games/${userState.userId}`,
      params: {
        query: {
          next: 0,
        },
      },
      headers: {
        "x-api-key": `${ETR_Info.API_key}`,
      },
    })
      .then((res) => {
        setUserMatch(res.userGames);
      })
      .catch(() => {
        console.log("UserMatchs에서 오류가 발생했습니다");
      });
  };

  useEffect(() => {
    GetBatttleRecord();
  }, []);

  return (
    <S.MatchBox>
      <MatchGame />
      
    </S.MatchBox>
  );
};

export default MatchBox;
