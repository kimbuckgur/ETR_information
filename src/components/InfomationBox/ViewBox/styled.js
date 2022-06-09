import styled from "styled-components";

export const GuideLine = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin-left: ${(props) => props.l};
  background: #e0e0e0;
  border-radius: 100px;
`;

export const CharacterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 300px;
  height: 400px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
`;

export const StatsBox = styled.div`
  width: 1000px;
  height: 250px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const MatchBox = styled.div`
  width: 680px;
  height: 920px;
  margin-left: 20px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
`;

export const InfomationViewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfomationViewBoxFlex = styled.div`
  display: flex;
`;

export const ModeBox = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;
  margin-left: 25px;
`;

export const SeasonTitle = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 23px;
  color: #343434;

  margin: 0px;
`;

export const TeamModeTitle = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 23px;
  color: #343434;

  margin: 0px;
  margin-left: 20px;
`;

export const SeasonSelect = styled.select`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #b6b6b6;

  width: 150px;
  height: 38px;
  border: none;
  outline: none;
  border: 2px solid #b6b6b6;
  border-radius: 3px;
  margin-left: 20px;
  margin-right: 20px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const UserStatsAria = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 15px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const UserStatsText = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #5a5a5a;

  margin: 0px;
`;

export const UserStatsReply = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #929292;

  margin: 0px;
`;

export const UserStatsTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 250px;
  height: 40px;
`;

export const SessionBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ChraterBoxTitle = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #343434;

  margin: 0px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const CharacterBoxLine = styled.div`
  width: 60px;
  height: 2px;
  background: #3b3b3b;
  border-radius: 100px;
  margin-top: 10px;
  margin-left: 20px;
`;

export const CharacterBoxTextFlex = styled.div`
  display: flex;
  align-items: center;

  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const CharacterBoxText = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #5a5a5a;

  margin: 0px;
`;

export const CharacterBoxNameAria = styled.div`
  display: flex;
  align-items: center;

  width: 60px;
  height: 24px;
  margin-left: 10px;
`;

export const CharacterBoxTextAria = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 24px;
`;

export const CharacterBoxCharacterAria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0px;
`;

export const CharacterBoxCharacter = styled.div`
  display: flex;
  align-items: center;

  width: 300px;
  height: 42px;
`;

export const CharacterBoxImg = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 100px;
  border: solid 1px #3b3b3b;
  margin-left: 20px;
`;

export const CharacterBoxValue = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: ${(props) => props.We};
  font-size: 14px;
  line-height: 16px;
  color: #5a5a5a;

  margin: 0px;
  margin-left: ${(props) => props.l};
`;

export const RankIMGBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 30px;
`;

export const RankIMGDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
  border: 2px solid #b6b6b6;
  border-radius: 100px;
`;

export const RankIMG = styled.img`
  width: auto;
  height: 50px;
`;

export const RankName = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #5a5a5a;

  margin: 0px;
  margin-top: 15px;
`;

export const RankText = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #5a5a5a;
`;

export const RankTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 200px;
  height: 35px;
`;

export const UserThreeStatsAria = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 15px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const UserThreeStatsText = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #5a5a5a;

  margin: 0px;
`;

export const UserThreeStatsReply = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #929292;

  margin: 0px;
`;

export const UserThreeStatsTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 190px;
  height: 36px;
`;

export const MatchGameBox = styled.div`
  display: flex;
  align-items: center;

  width: 680px;
  height: 100px;
  background: #ffffff;
`;

export const MaGaLine = styled.div`
  width: 3px;
  height: 100px;
  background-color: #343434;
`;

export const MaGaTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 25px;
`;

export const MaGaTextBoxLine = styled.div`
  width: 100px;
  height: 1px;
  background: #e0e0e0;
  border-radius: 100px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const MaGaRankingTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MaGaRankingText = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
  color: #343434;

  margin: 0px;
  margin-right: 5px;
`;

export const MaGaTellText = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #5a5a5a;

  margin: 0px;
`;

export const MaGaTimeText = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #5a5a5a;

  margin: 0px;
`;

export const MaGaIMGBox = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
  margin-left: 30px;
`;

export const MaGaLevelBox = styled.div`
  position: absolute;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  width: 70px;
  height: 70px;
`;

export const MaGaIMG = styled.img`
  width: 54px;
  height: 54px;
  background: #ffffff;
  border: 1px solid #343434;
  border-radius: 100px;
`;

export const MaGaLevel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;

  width: 24px;
  height: 24px;
  background: #343434;
  border-radius: 100px;
`;

