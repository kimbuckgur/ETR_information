import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 360px;
  background-color: #343434;
`;

export const TitleText = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;

  margin: 0px;
`;

export const inputDiv = styled.div`
  display: flex;

  width: 500px;
  height: 54px;
  background: #ffffff;
  border: 2px solid #b6b6b6;
  box-sizing: border-box;
  border-radius: 2px;
  margin-top: 50px;
  margin-bottom: 25px;
`;

export const SearchInput = styled.input`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #343434;

  width: 438px;
  border: none;
  outline: none;
  padding-left: 20px;
  padding-top: 4px;

  &&::placeholder {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #b6b6b6;
  }
`;

export const SearchInputImg = styled.img`
  margin-left: 20px;
  margin-right: 20px;
`;
