import axios from "axios";
import React, { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import {
  ETR_Infomation,
  OnAndOff,
  UserState,
  UserStatistics,
  ChraterState,
  UserMatchs,
} from "../State/state";
import SearchIcon from "../../assets/svg/SearchIcon.svg";
import * as S from "./styled";
import { useEffect } from "react";

const Searchbox = () => {
  const [nickNameText, setNickNameText] = useState("");
  const [userMatchs, setUserMatch] = useRecoilState(UserMatchs);
  const [chraterState, setChraterState] = useRecoilState(ChraterState);
  const [ETR_Info, setETR_Info] = useRecoilState(ETR_Infomation);
  const [userState, setUserState] = useRecoilState(UserState);
  const [userStatistics, setUserStatistics] = useRecoilState(UserStatistics);
  const [ETR_OnAndOff, setETR_OnAndOff] = useRecoilState(OnAndOff);

  const onChangeNickNameText = (e) => {
    setNickNameText(e.target.value);
  };

  const GetBatttleRecord = (UserNum) => {
    axios({
      method: "GET",
      url: `${ETR_Info.url}/v1/user/games/${UserNum}`,
      params: {
        query: {
          next: 0,
        },
      },
      headers: {
        "x-api-key": `${ETR_Info.API_key}`,
      },
    })
      .then((res) => {
        let UserGames = res.data.userGames;
        UserGames.map((x, index) => {
          x.id = index;
          x.onAndoff = false;
        });
        setUserMatch(UserGames);
      })
      .catch(() => {
        console.log("UserMatchs에서 오류가 발생했습니다");
      });
  };

  const GetStats = (UserNum) => {
    axios({
      method: "GET",
      url: `${ETR_Info.url}/v1/user/stats/${UserNum}/${userState.SeasonState}`,
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
        } else if (res.data.code == 404) {
          console.log("랭크전을 안했습니다");
          setChraterState([]);
          setUserStatistics([]);
        }
      })
      .catch((res) => {
        setETR_OnAndOff(false);
        alert("오류가 발생했습니다");
      });
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
            GetBatttleRecord(res.data.user.userNum);
            GetStats(res.data.user.userNum);
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
