import axios from "axios";
import React, { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { baseURL, APIKey, OnAndOff, UserID } from "../State/state";
import SearchIcon from "../../assets/svg/SearchIcon.svg";
import * as S from "./styled";

const Searchbox = () => {
  const [NickNameText, setNickNameText] = useState("");
  const [ETRURL, setETRURL] = useRecoilState(baseURL);
  const [ETR_ApiKey, setETR_ApiKey] = useRecoilState(APIKey);
  const [userId, setUserId] = useRecoilState(UserID);
  const [ETR_OnAndOff, setETR_OnAndOff] = useRecoilState(OnAndOff);

  const onChangeNickNameText = (e) => {
    setNickNameText(e.target.value);
  };

  // const GeBatttleRecord = () => {
  //   let UserId = localStorage.getItem("UserId");
  //   axios({
  //     method: "GET",
  //     url: `${ETRURL}/v1/user/games/${UserId}`,
  //     params: {
  //       query: {
  //         next:0
  //       }
  //     },
  //     headers: {
  //       "x-api-key": `${ETR_ApiKey}`,
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   });

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

  const ReceiveUserID = (e) => {
    if (e.key == "Enter") {
      axios({
        method: "GET",
        url: `${ETRURL}/v1/user/nickname`,
        params: {
          query: `${NickNameText}`,
        },
        headers: {
          "x-api-key": `${ETR_ApiKey}`,
        },
      })
        .catch((res) => {
          setETR_OnAndOff(false);
          console.log("실패");
          setNickNameText("");
          alert("닉네임을 정확하게 입력해주세요");
        })
        .then((res) => {
          if (res.data.code == 200) {
            console.log(res);
            setETR_OnAndOff(true);
            setUserId(res.data.user.userNum);
            localStorage.setItem("UserId", `${res.data.user.userNum}`);
          } else if (res.data.code == 404) {
            setETR_OnAndOff(false);
            console.log("실패");
            setNickNameText("");
            alert("닉네임을 정확하게 입력해주세요");
          }
        });
    }
  };

  return (
    <S.SearchBox>
      <S.TitleText
        onClick={() => {
          setETR_OnAndOff(false);
        }}
      >
        E.T.R 전적 검색 서비스
      </S.TitleText>
      <S.inputDiv>
        <S.SearchInput
          onChange={onChangeNickNameText}
          placeholder="닉네임을 입력해주세요"
          onKeyPress={ReceiveUserID}
          value={NickNameText}
        />
        <S.SearchInputImg src={SearchIcon} />
      </S.inputDiv>
    </S.SearchBox>
  );
};

export default Searchbox;
