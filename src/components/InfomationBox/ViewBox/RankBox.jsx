import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { UserID, baseURL, APIKey } from "../../State/state";
import * as S from "./styled";

const RankBox = () => {
  // const [ETR_ApiKey, setETR_ApiKey] = useRecoilState(APIKey);
  // const [ETRURL, setETRURL] = useRecoilState(baseURL);
  // const [userId, setUserId] = useRecoilState(UserID);

  // const GetRank = () => {
  //   axios({
  //     method: "GET",
  //     url: `${ETRURL}/v1/rank/${userId}/${1}/${1}`,
  //     headers: {
  //       "x-api-key": `${ETR_ApiKey}`,
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };

  // useEffect(() => {
  //   GetRank();
  // }, []);

  return <S.RankBox></S.RankBox>;
};

export default RankBox;
