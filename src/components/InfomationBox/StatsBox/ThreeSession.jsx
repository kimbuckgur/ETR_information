import React from "react";
import { useRecoilState } from "recoil";
import { UserState, UserStatistics } from "../../State/state";
import * as S from "../ViewBox/styled";

const ThreeSession = () => {
  const [userStatistics, setUserStatistics] = useRecoilState(UserStatistics);
  const [userState, setUserState] = useRecoilState(UserState);

  return (
    <S.UserThreeStatsAria>
      <S.UserThreeStatsTextBox>
        <S.UserThreeStatsText>mmr</S.UserThreeStatsText>
        <S.UserThreeStatsReply>
          {userStatistics[userState.TeamModeState - 1] ? (
            userStatistics[userState.TeamModeState - 1].mmr != null ? (
              userStatistics[userState.TeamModeState - 1].mmr
            ) : (
              <>일반 게임입니다</>
            )
          ) : (
            <>일반 게임 입니다</>
          )}
        </S.UserThreeStatsReply>
      </S.UserThreeStatsTextBox>
      <S.UserThreeStatsTextBox>
        <S.UserThreeStatsText>Top1 비율</S.UserThreeStatsText>
        <S.UserThreeStatsReply>
          {userStatistics[userState.TeamModeState - 1] ? (
            userStatistics[userState.TeamModeState - 1].top1
          ) : (
            <>일반 게임 입니다</>
          )}
        </S.UserThreeStatsReply>
      </S.UserThreeStatsTextBox>
      <S.UserThreeStatsTextBox>
        <S.UserThreeStatsText>Top3 비율</S.UserThreeStatsText>
        <S.UserThreeStatsReply>
          {userStatistics[userState.TeamModeState - 1] ? (
            userStatistics[userState.TeamModeState - 1].top3
          ) : (
            <>일반 게임 입니다</>
          )}
        </S.UserThreeStatsReply>
      </S.UserThreeStatsTextBox>
    </S.UserThreeStatsAria>
  );
};

export default ThreeSession;
