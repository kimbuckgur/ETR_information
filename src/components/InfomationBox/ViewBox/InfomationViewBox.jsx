import React, { useEffect } from "react";
import CharacterBox from "./CharacterBox";
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

  const GetRank = (mmr) => {
    if (mmr < 400) {
      return "iron";
    } else if (mmr >= 400 && mmr < 800) {
      return "bronze";
    } else if (mmr >= 800 && mmr < 1200) {
      return "silver";
    } else if (mmr >= 1200 && mmr < 1600) {
      return "gold";
    } else if (mmr >= 1600 && mmr < 2000) {
      return "platinum";
    } else if (mmr >= 2000 && mmr < 2400) {
      return "diamond";
    } else if (mmr >= 2400 && mmr < 2600) {
      return "titan";
    } else if (mmr > 2600) {
      return "eter";
    }
  };

  const GetStats = (season) => {
    axios({
      method: "GET",
      url: `${ETR_Info.url}/v1/user/stats/${userState.userId}/${season}`,
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
          setUserState({
            ...userState,
            Rank: GetRank(res.data.userStats[userState.TeamModeState - 1].mmr),
          });
        } else if (res.data.code == 404) {
          console.log("랭크전을 안했습니다");
          setChraterState([]);
          setUserStatistics([]);
          setUserState({
            ...userState,
            Rank: "",
          });
        }
      })
      .catch((res) => {
        setETR_OnAndOff(false);
        alert("오류가 발생했습니다");
      });
  };

  return (
    <S.InfomationViewBox>
      <StatsBox GetStats={GetStats} />
      <S.InfomationViewBoxFlex>
        <CharacterBox GetStats={GetStats} />
        <MatchBox />
      </S.InfomationViewBoxFlex>
    </S.InfomationViewBox>
  );
};

export default InfomationViewBox;
