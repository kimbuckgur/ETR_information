import React, { useEffect } from "react";
import RankBox from "./RankBox";
import StatsBox from "./StatsBox";
import MatchBox from "./MatchBox";
import { UserID, baseURL, APIKey } from "../../State/state";
import { useRecoilState } from "recoil";
import axios from "axios";
import * as S from "./styled";

const InfomationViewBox = () => {
  const [ETR_ApiKey, setETR_ApiKey] = useRecoilState(APIKey);
  const [ETRURL, setETRURL] = useRecoilState(baseURL);
  const [userId, setUserId] = useRecoilState(UserID);

  const GetStats = () => {
    axios({
      method: "GET",
      url: `${ETRURL}/v1/user/stats/${userId}/${1}`,
      headers: {
        "x-api-key": `${ETR_ApiKey}`,
      },
    }).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    GetStats();
  }, []);

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
