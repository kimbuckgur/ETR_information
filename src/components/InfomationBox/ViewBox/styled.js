import styled from "styled-components";

export const RankBox = styled.div`
  width: 300px;
  height: 400px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
`;

export const StatsBox = styled.div`
  width: 1000px;
  height: 160px;
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

export const SeasonBox = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;
  margin-left: 25px;
`;

export const SeasonTitle = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #343434;
`;

export const SeasonNumberBoxOff = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #343434;

  background: #f0f0f0;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  margin-left: 15px;
`;

export const SeasonNumberBoxOn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;

  background: #343434;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  margin-left: 15px;
`;
