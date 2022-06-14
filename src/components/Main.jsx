import React from "react";
import styled from "styled-components";
import Searchbox from "./SearchBox/Searchbox";
import InfomationBox from "./InfomationBox/InfomationBox";

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: auto;
  background-color: #f6f6f6;
`;

const Main = () => {
  return (
    <MainBox>
      <Searchbox />
      <InfomationBox />
    </MainBox>
  );
};

export default Main;
