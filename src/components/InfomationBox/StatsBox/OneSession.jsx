import React from "react";
import { UserState, UserStatistics } from "../../State/state";
import { useRecoilState } from "recoil";
import * as S from "../ViewBox/styled";

const OneSession = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [userStatistics, setUserStatistics] = useRecoilState(UserStatistics);

  return (
    <S.UserStatsAria>
      <S.UserStatsTextBox>
        <S.UserStatsText>플레이한 게임</S.UserStatsText>
        <S.UserStatsReply>
          {userStatistics[userState.TeamModeState - 1] ? (
            userStatistics[userState.TeamModeState - 1].totalGames
          ) : (
            <>정보가 없습니다</>
          )}
        </S.UserStatsReply>
      </S.UserStatsTextBox>
      <S.UserStatsTextBox>
        <S.UserStatsText>총 승리 횟수</S.UserStatsText>
        <S.UserStatsReply>
          {userStatistics[userState.TeamModeState - 1] ? (
            userStatistics[userState.TeamModeState - 1].totalWins
          ) : (
            <>정보가 없습니다</>
          )}
        </S.UserStatsReply>
      </S.UserStatsTextBox>
    </S.UserStatsAria>
  );
};

export default OneSession;
