import React, { useEffect } from "react";
import { ETR_Infomation, UserState, UserMatchs } from "../../State/state";
import arrow_left from "../../../assets/svg/arrow_left.svg";
import arrow_right from "../../../assets/svg/arrow_right.svg";
import MatchGame from "../MatchBox/MatchGame";
import { useRecoilState } from "recoil";
import axios from "axios";
import * as S from "./styled";

const MatchBox = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [ETR_Info, setETR_Info] = useRecoilState(ETR_Infomation);
  const [userMatchs, setUserMatch] = useRecoilState(UserMatchs);

  useEffect(() => {
    console.log(userState.battlePageNum);
  }, [userState.battlePageNum]);

  const GetBatttleRecord = (ClickPage) => {
    axios({
      method: "GET",
      url: `${ETR_Info.url}/v1/user/games/${userState.userId}`,
      query: {
        next: ClickPage,
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

  const onChangePage = (e) => {
    const { name } = e.target;
    if (name == "up") {
      GetBatttleRecord(userState.battlePageNum + 1);
      setUserState({
        ...userState,
        battlePageNum: userState.battlePageNum + 1,
      });
    } else if (name == "down") {
      if (userState.battlePageNum > 0) {
        GetBatttleRecord(userState.battlePageNum - 1);
        setUserState({
          ...userState,
          battlePageNum: userState.battlePageNum - 1,
        });
      }
    }
  };

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
      <S.MatachArrowBox>
        <S.MatachArrow onClick={onChangePage} name="down" r="1px">
          <img src={arrow_left} name="down" />
        </S.MatachArrow>
        <S.MatachArrow onClick={onChangePage}>
          {userState.battlePageNum + 1}
        </S.MatachArrow>
        <S.MatachArrow onClick={onChangePage} name="up" l="1px">
          <img src={arrow_right} name="up" />
        </S.MatachArrow>
      </S.MatachArrowBox>
    </S.MatchAria>
  );
};

export default MatchBox;
