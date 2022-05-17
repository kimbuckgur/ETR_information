import React, { useEffect } from "react";
import { ETR_Infomation, UserState } from "../../State/state";
import axios from "axios";
import { useRecoilState } from "recoil";
import * as S from "./styled";

const MatchBox = () => {
  const [ETR_Info, setETR_Info] = useRecoilState(ETR_Infomation);
  const [userState, setUserState] = useRecoilState(UserState);

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
    }).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    GetBatttleRecord();
  }, []);
  return <S.MatchBox></S.MatchBox>;
};

export default MatchBox;
