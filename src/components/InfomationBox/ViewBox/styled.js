import styled from "styled-components";

export const GuideLine = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background: #e0e0e0;
  border-radius: 100px;
`;

export const RankBox = styled.div`
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
  margin-left:20px;
`;

export const SeasonSelect = styled.select`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #B6B6B6;

  width: 150px;
  height: 38px;
  border: none;
  outline: none;
  border: 2px solid #B6B6B6;
  border-radius: 3px;
  margin-left: 20px;
  margin-right:20px;
  padding-right: 10px;
  padding-left: 10px;
`;
