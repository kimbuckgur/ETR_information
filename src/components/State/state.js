import { atom, selector } from "recoil";

export const ETR_Infomation = atom({
  key: "ETR_Infomation",
  default: {
    url: "https://open-api.bser.io",
    API_key: "ymj3AvldYuaQaSnf3oT3S5MrxNAU1NvH4SDndXvS",
  },
});

export const OnAndOff = atom({
  key: "OnAndOff",
  default: false,
});

export const UserState = atom({
  key: "UserState",
  default: {
    userNickName: "",
    userId: 0,
    SeasonState: 0,
    TeamModeState: 1,
  },
});

export const UserStatistics = atom({
  key: "UserStatistics",
  default: [],
});

export const UserMatchs = atom({
  key: "UserMatchs",
  default: [],
});

export const ChraterState = atom({
  key: "chraterState",
  default: [],
});
