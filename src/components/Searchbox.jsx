import axios from "axios";
import React, { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { baseURL, APIKey } from "./State/state";
import * as S from "./styled";

const Searchbox = () => {
  const [NickName, setNickName] = useState("");
  const [ETRURL, setETRURL] = useRecoilState(baseURL);
  const [ETR_ApiKey, setETR_ApiKey] = useRecoilState(APIKey);

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  // const GetRank = () => {
  //   axios({
  //     method: "GET",
  //     url: `${ETRURL}/v1/rank/top/${3}/${2};`,
  //     headers: {
  //       "x-api-key": `${ETR_ApiKey}`,
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };

  const ReceiveUserID = () => {
    axios({
      method: "GET",
      url: `${ETRURL}/v1/user/nickname`,
      params: {
        query: `${NickName}`,
      },
      headers: {
        "x-api-key": `${ETR_ApiKey}`,
      },
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <input onChange={onChangeNickName} />
      <button onClick={ReceiveUserID}>sdfsdf</button>
    </div>
  );
};

export default Searchbox;
