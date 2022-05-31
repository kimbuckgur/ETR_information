import React, { useEffect } from "react";
import Character from "./Character";
import StatsBox from "./StatsBox";
import MatchBox from "./MatchBox";
import {
  ETR_Infomation,
  OnAndOff,
  UserState,
  UserStatistics,
  ChraterState,
} from "../../State/state";
import { useRecoilState } from "recoil";
import axios from "axios";
import * as S from "./styled";

const InfomationViewBox = () => {
  const [chraterState, setChraterState] = useRecoilState(ChraterState);
  const [ETR_Info, setETR_Info] = useRecoilState(ETR_Infomation);
  const [userState, setUserState] = useRecoilState(UserState);
  const [userStatistics, setUserStatistics] = useRecoilState(UserStatistics);
  const [ETR_OnAndOff, setETR_OnAndOff] = useRecoilState(OnAndOff);

  const GetStats = () => {
    axios({
      method: "GET",
      url: `${ETR_Info.url}/v1/user/stats/${userState.userId}/${userState.SeasonState}`,
      headers: {
        "x-api-key": `${ETR_Info.API_key}`,
      },
    })
      .then((res) => {
        if (res.data.code == 200) {
          setUserStatistics(res.data.userStats);
          setChraterState(
            res.data.userStats[userState.TeamModeState - 1].characterStats
          );
        } else if (res.data.code == 404) {
          console.log("랭크전을 안했습니다");
          setUserStatistics([]);
        }
      })
      .catch((res) => {
        setETR_OnAndOff(false);
        alert("오류가 발생했습니다");
      });
  };

  useEffect(() => {
    GetStats();
  }, [userState.userId]);

  return (
    <S.InfomationViewBox>
      <StatsBox GetStats={GetStats} />
      <S.InfomationViewBoxFlex>
        <Character GetStats={GetStats} />
        <MatchBox />
      </S.InfomationViewBoxFlex>
    </S.InfomationViewBox>
  );
};

export default InfomationViewBox;
