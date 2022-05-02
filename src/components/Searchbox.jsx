import axios from "axios";
import React, { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { baseURL, APIKey } from "./State/state";
import SearchIcon from "../assets/svg/SearchIcon.svg"
import * as S from "./styled";

const Searchbox = () => {
  const [NickName, setNickName] = useState("");
  const [ETRURL, setETRURL] = useRecoilState(baseURL);
  const [ETR_ApiKey, setETR_ApiKey] = useRecoilState(APIKey);

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  // const GetRank = () => {
  //   let UserId = localStorage.getItem("UserId");
  //   axios({
  //     method: "GET",
  //     url: `${ETRURL}/v1/rank/${UserId}/${3}/${1}`,
  //     headers: {
  //       "x-api-key": `${ETR_ApiKey}`,
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };

  // const GetStats = () => {
  //   let UserId = localStorage.getItem("UserId");
  //   axios({
  //     method: "GET",
  //     url: `${ETRURL}/v1/user/stats/${UserId}/${1}`,
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
      localStorage.setItem("UserId", `${res.data.user.userNum}`);
      console.log(localStorage.getItem("UserId"));
    });
  };

  return (
    <S.MainBox>
      <S.SearchBox>
        <S.TitleText>E.T.R 전적 검색 서비스</S.TitleText>
        <S.inputDiv>
          <S.SearchInput placeholder="닉네임을 입력해주세요"/>
          <S.SearchInputImg src={SearchIcon}/>
        </S.inputDiv>
      </S.SearchBox>
    </S.MainBox>
  );
};

export default Searchbox;
