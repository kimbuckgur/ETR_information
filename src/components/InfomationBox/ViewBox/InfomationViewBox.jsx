import React, { useEffect } from "react";
import RankBox from "./RankBox";
import StatsBox from "./StatsBox";
import MatchBox from "./MatchBox";
import { UserID, ETR_Infomation, OnAndOff, SeasonState } from "../../State/state";
import { useRecoilState } from "recoil";
import axios from "axios";
import * as S from "./styled";

const InfomationViewBox = () => {
  const [ETR_Info, setETR_Info] = useRecoilState(ETR_Infomation);
  const [userId, setUserId] = useRecoilState(UserID);
  const [ETR_OnAndOff, setETR_OnAndOff] = useRecoilState(OnAndOff);

  const GetStats = () => {
    axios({
      method: "GET",
      url: `${ETR_Info.url}/v1/user/stats/${userId}/${0}`,
      headers: {
        "x-api-key": `${ETR_Info.API_key}`,
      },
    })
      .catch((res) => {
        setETR_OnAndOff(false);
        alert("오류가 발생했습니다");
      })
      .then((res) => {
        if (res.data.code == 200) {
          console.log(res);
        } else if (res.data.code == 404) {
          console.log("랭크전을 안했습니다");
        }
      });
  };

  useEffect(() => {
    GetStats();
  }, [userId]);

  return (
    <S.InfomationViewBox>
      <StatsBox GetStats={GetStats} />
      <S.InfomationViewBoxFlex>
        <RankBox />
        <MatchBox />
      </S.InfomationViewBoxFlex>
    </S.InfomationViewBox>
  );
};

export default InfomationViewBox;
