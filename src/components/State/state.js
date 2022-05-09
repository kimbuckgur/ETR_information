import { atom, selector } from "recoil";

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

export const UserID = atom({
  key: "userId",
  default: undefined,
});
