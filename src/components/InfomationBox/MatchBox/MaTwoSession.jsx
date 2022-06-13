import React from "react";
import * as S from "../ViewBox/styled";

const MaTwoSession = ({ x }) => {
  return (
    <S.MaGaDeInfoBox>
      <S.MaGaDeTextBox>
        <S.MaGaDeText>최대 스태미나</S.MaGaDeText>
        <S.MaGaDeSubText color="#343434">
          {x.maxSp.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
      <S.MaGaDeLine />
      <S.MaGaDeTextBox>
        <S.MaGaDeText>이동 속도</S.MaGaDeText>
        <S.MaGaDeSubText color="#343434">
          {x.moveSpeed
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
      <S.MaGaDeLine />
      <S.MaGaDeTextBox>
        <S.MaGaDeText>공격 속도</S.MaGaDeText>
        <S.MaGaDeSubText color=" #34343">
          {x.attackSpeed
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
      <S.MaGaDeLine />
      <S.MaGaDeTextBox>
        <S.MaGaDeText>방어력</S.MaGaDeText>
        <S.MaGaDeSubText color=" #34343">
          {x.defense.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
      <S.MaGaDeLine />
      <S.MaGaDeTextBox>
        <S.MaGaDeText>치명타 확률</S.MaGaDeText>
        <S.MaGaDeSubText color=" #34343">
          {x.criticalStrikeChance
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
      <S.MaGaDeLine />
      <S.MaGaDeTextBox>
        <S.MaGaDeText>플레이 시간</S.MaGaDeText>
        <S.MaGaDeSubText color=" #34343">
          {x.attackPower}
            {/* .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} */}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
    </S.MaGaDeInfoBox>
  );
};

export default MaTwoSession;
