import React from "react";
import * as S from "../ViewBox/styled";

const MaOneSession = ({ x }) => {
  return (
    <S.MaGaDeInfoBox>
      <S.MaGaDeTextBox>
        <S.MaGaDeText>캐릭터 피해량</S.MaGaDeText>
        <S.MaGaDeSubText color="#0A4595;">
          {x.damageToPlayer
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
      <S.MaGaDeLine />
      <S.MaGaDeTextBox>
        <S.MaGaDeText>몬스터 피해량</S.MaGaDeText>
        <S.MaGaDeSubText color="#3068D3">
          {x.damageToMonster
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
      <S.MaGaDeLine />
      <S.MaGaDeTextBox>
        <S.MaGaDeText>무기 숙련도</S.MaGaDeText>
        <S.MaGaDeSubText color=" #34343">
          {x.bestWeaponLevel
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
      <S.MaGaDeLine />
      <S.MaGaDeTextBox>
        <S.MaGaDeText>팀 번호</S.MaGaDeText>
        <S.MaGaDeSubText color=" #34343">
          {x.teamNumber
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
      <S.MaGaDeLine />
      <S.MaGaDeTextBox>
        <S.MaGaDeText>최대 체력</S.MaGaDeText>
        <S.MaGaDeSubText color=" #34343">
          {x.maxHp
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
      <S.MaGaDeLine />
      <S.MaGaDeTextBox>
        <S.MaGaDeText>공격력</S.MaGaDeText>
        <S.MaGaDeSubText color=" #34343">
          {x.attackPower
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </S.MaGaDeSubText>
      </S.MaGaDeTextBox>
    </S.MaGaDeInfoBox>
  );
};

export default MaOneSession;
