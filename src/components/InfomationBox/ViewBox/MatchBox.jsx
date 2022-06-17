import React, { useEffect } from "react";
import { ETR_Infomation, UserState, UserMatchs } from "../../State/state";
import arrow_arrowBlack from "../../../assets/svg/arrow_arrowBlack.svg";
import MatchGame from "../MatchBox/MatchGame";
import { useRecoilState } from "recoil";
import axios from "axios";
import * as S from "./styled";

const MatchBox = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [ETR_Info, setETR_Info] = useRecoilState(ETR_Infomation);
  const [userMatchs, setUserMatch] = useRecoilState(UserMatchs);

  const GetBatttleRecord = () => {
    axios({
      method: "GET",
      url: `${ETR_Info.url}/v1/user/games/${userState.userId}`,
      query: {
        next: userState.battlePageNum,
      },
      headers: {
        "x-api-key": `${ETR_Info.API_key}`,
      },
    })
      .then((res) => {
        console.log(res);
        let UserGames = res.data.userGames;
        UserGames.map((x, index) => {
          x.id = index;
          x.onAndoff = false;
        });
        setUserMatch(UserGames);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  // const onChangePage = (e) => {
  //   const { name } = e.target;
  //   if (name == "up") {
  //     GetBatttleRecord(userState.battlePageNum + 1);
  //     setUserState({
  //       ...userState,
  //       battlePageNum: userState.battlePageNum + 1,
  //     });
  //   } else if (name == "down") {
  //     if (userState.battlePageNum > 0) {
  //       GetBatttleRecord(userState.battlePageNum - 1);
  //       setUserState({
  //         ...userState,
  //         battlePageNum: userState.battlePageNum - 1,
  //       });
  //     }
  //   }
  // };

  const DetailOnOff = (e) => {
    setUserMatch(
      userMatchs.map((x, index) =>
        e.target.name == index ? { ...x, onAndoff: !x.onAndoff } : x
      )
    );
  };

  const userMatchsMap = userMatchs.map((x, index) => {
    return <MatchGame DetailOnOff={DetailOnOff} x={x} key={index} />;
  });

  return (
    <S.MatchAria>
      <S.MatchBox>{userMatchs ? <>{userMatchsMap}</> : <></>}</S.MatchBox>
      <S.MatachArrow name="more">
        <img src={arrow_arrowBlack} name="up" />
      </S.MatachArrow>
    </S.MatchAria>
  );
};

export default MatchBox;
