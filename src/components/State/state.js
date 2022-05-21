import { atom, selector } from "recoil";

export const ETR_Infomation = atom({
  key: "ETR_Infomation",
  default: {
    url: "https://open-api.bser.io",
    API_key: "ymj3AvldYuaQaSnf3oT3S5MrxNAU1NvH4SDndXvS",
  },
});

export const baseURL = atom({
  key: "baseURL",
  default: "https://open-api.bser.io",
});

export const APIKey = atom({
  key: "APIKey",
  default: "ymj3AvldYuaQaSnf3oT3S5MrxNAU1NvH4SDndXvS",
});

export const OnAndOff = atom({
  key: "OnAndOff",
  default: false,
});

export const UserState = atom({
  key: "UserState",
  default: {
    userNickName: "",
    userId: undefined,
    SeasonState: 0,
    TeamModeState: 1,
  },
});
