import axios from "axios";
import React, { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { ETR_Infomation, OnAndOff, UserState } from "../State/state";
import SearchIcon from "../../assets/svg/SearchIcon.svg";
import * as S from "./styled";

const Searchbox = () => {
  const [nickNameText, setNickNameText] = useState("");
  const [userState, setUserState] = useRecoilState(UserState);
  const [ETR_Info, setETR_Info] = useRecoilState(ETR_Infomation);
  const [ETR_OnAndOff, setETR_OnAndOff] = useRecoilState(OnAndOff);

  const onChangeNickNameText = (e) => {
    setNickNameText(e.target.value);
  };

  const ReceiveUserID = (e) => {
    if (e.key == "Enter") {
      axios({
        method: "GET",
        url: `${ETR_Info.url}/v1/user/nickname`,
        params: {
          query: `${nickNameText}`,
        },
        headers: {
          "x-api-key": `${ETR_Info.API_key}`,
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            setETR_OnAndOff(true);
            setUserState({ ...userState, userId: res.data.user.userNum });
            setNickNameText("");
            localStorage.setItem("UserId", `${res.data.user.userNum}`);
          } else if (res.data.code == 404) {
            console.log(res);
            setETR_OnAndOff(false);
            console.log("404 실패");
            setNickNameText("");
            alert("닉네임을 정확하게 입력해주세요");
          }
        })
        .catch((res) => {
          setETR_OnAndOff(false);
          console.log("오류 실패");
          setNickNameText("");
          alert("닉네임을 정확하게 입력해주세요");
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
          value={nickNameText}
        />
        <S.SearchInputImg src={SearchIcon} />
      </S.inputDiv>
    </S.SearchBox>
  );
};

export default Searchbox;
