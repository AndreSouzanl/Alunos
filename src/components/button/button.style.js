import { COLORS, FONT_SIZE, FONTS_FAMILY } from "../../contants/theme.js";

export const styles = {
  btn: {
    width: "100%",
    margin: 15,
    padding: 10,
    borderRadius: 4,
   },
  
   btnBlue: {
    backgroundColor: COLORS.blue,
  },
   
  btnRed: {
    backgroundColor: COLORS.red,
  },
  
  

  btnText: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: FONT_SIZE.sm,
    fontFamily: FONTS_FAMILY.regular,
  },
};
