import React, { useEffect } from "react";
import RankBox from "./RankBox";
import StatsBox from "./StatsBox";
import MatchBox from "./MatchBox";
import { UserID, baseURL, APIKey, OnAndOff } from "../../State/state";
import { useRecoilState } from "recoil";
import axios from "axios";
import * as S from "./styled";

const InfomationViewBox = () => {
  const [ETR_ApiKey, setETR_ApiKey] = useRecoilState(APIKey);
  const [ETRURL, setETRURL] = useRecoilState(baseURL);
  const [userId, setUserId] = useRecoilState(UserID);
  const [ETR_OnAndOff, setETR_OnAndOff] = useRecoilState(OnAndOff);

  const GetStats = () => {
    axios({
      method: "GET",
      url: `${ETRURL}/v1/user/stats/${userId}/${0}`,
      headers: {
        "x-api-key": `${ETR_ApiKey}`,
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
      <StatsBox />
      <S.InfomationViewBoxFlex>
        <RankBox />
        <MatchBox />
      </S.InfomationViewBoxFlex>
    </S.InfomationViewBox>
  );
};

export default InfomationViewBox;
