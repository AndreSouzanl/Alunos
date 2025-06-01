import { COLORS, FONT_SIZE, FONTS_FAMILY } from "../../contants/theme.js";

export const styles = {
  aluno: {
    width: "100%",
    backgroundColor: COLORS.mediun_gray,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 6,
    marginTop: 10,
  },
  titulo: {
    color: COLORS.white,
    fontSize: FONT_SIZE.sm,
    fontFamily: FONTS_FAMILY.regular,
    marginLeft: 10,
    TextAlign: "left",
    flex: 1
  },
  icone: {
    width: 30,
    height: 30,
  },
  btnDelete: {
    width: 25,
    height: 25,
  },
 
};
