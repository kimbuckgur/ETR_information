import React from "react";
import { UserState, UserStatistics } from "../../State/state";
import { useRecoilState } from "recoil";
import * as S from "../ViewBox/styled";

const TwoSession = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const [userStatistics, setUserStatistics] = useRecoilState(UserStatistics);

  return (
    <S.UserStatsAria>
      <S.UserStatsTextBox>
        <S.UserStatsText>평균 킬</S.UserStatsText>
        <S.UserStatsReply>
          {userStatistics[userState.TeamModeState - 1] ? (
            userStatistics[userState.TeamModeState - 1].averageKills
          ) : (
            <>정보가 없습니다</>
          )}
        </S.UserStatsReply>
      </S.UserStatsTextBox>
      <S.UserStatsTextBox>
        <S.UserStatsText>평균 어시스트</S.UserStatsText>
        <S.UserStatsReply>
          {userStatistics[userState.TeamModeState - 1] ? (
            userStatistics[userState.TeamModeState - 1].averageAssistants ==
            0 ? (
              <>솔로입니다</>
            ) : (
              userStatistics[userState.TeamModeState - 1].averageAssistants
            )
          ) : (
            <>정보가 없습니다</>
          )}
        </S.UserStatsReply>
      </S.UserStatsTextBox>
      <S.UserStatsTextBox>
        <S.UserStatsText>평균 순위</S.UserStatsText>
        <S.UserStatsReply>
          {userStatistics[userState.TeamModeState - 1] ? (
            userStatistics[userState.TeamModeState - 1].averageRank
          ) : (
            <>정보가 없습니다</>
          )}
        </S.UserStatsReply>
      </S.UserStatsTextBox>
      <S.UserStatsTextBox>
        <S.UserStatsText>평균 사냥 횟수</S.UserStatsText>
        <S.UserStatsReply>
          {userStatistics[userState.TeamModeState - 1] ? (
            userStatistics[userState.TeamModeState - 1].averageHunts
          ) : (
            <>정보가 없습니다</>
          )}
        </S.UserStatsReply>
      </S.UserStatsTextBox>
    </S.UserStatsAria>
  );
};

export default TwoSession;
