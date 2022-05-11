import React, { useEffect } from "react";
import { UserID, baseURL, APIKey } from "../../State/state";
import axios from "axios";
import { useRecoilState } from "recoil";
import * as S from "./styled";

const MatchBox = () => {
  const [ETR_ApiKey, setETR_ApiKey] = useRecoilState(APIKey);
  const [ETRURL, setETRURL] = useRecoilState(baseURL);
  const [userId, setUserId] = useRecoilState(UserID);

  const GetBatttleRecord = () => {
    axios({
      method: "GET",
      url: `${ETRURL}/v1/user/games/${userId}`,
      params: {
        query: {
          next: 0,
        },
      },
      headers: {
        "x-api-key": `${ETR_ApiKey}`,
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
