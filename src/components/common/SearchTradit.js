import * as I from "../../assets/Tradit";

export const useFirstTradit = (x) => {
  if (x.traitFirstCore == 7000201) {
    return I.N7000201;
  } else if (x.traitFirstCore == 7000301) {
    return I.N7000301;
  } else if (x.traitFirstCore == 7000401) {
    return I.N7000401;
  } else if (x.traitFirstCore == 7000501) {
    return I.N7000501;
  } else if (x.traitFirstCore == 7100101) {
    return I.N7100101;
  } else if (x.traitFirstCore == 7100201) {
    return I.N7100201;
  } else if (x.traitFirstCore == 7100301) {
    return I.N7100301;
  } else if (x.traitFirstCore == 7200101) {
    return I.N7200101;
  } else if (x.traitFirstCore == 7200201) {
    return I.N7200201;
  } else if (x.traitFirstCore == 7200301) {
    return I.N7200301;
  }
};

export const useSecondTradit = (x) => {
  let SliceTradit = x.traitSecondSub[0];
  SliceTradit = SliceTradit.toString();
  SliceTradit = SliceTradit.slice(0, 2);
  if (SliceTradit == 70) {
    return I.N70;
  } else if (SliceTradit == 71) {
    return I.N71;
  } else if (SliceTradit == 72) {
    return I.N72;
  }
};
