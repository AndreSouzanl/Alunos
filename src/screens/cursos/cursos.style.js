import { COLORS, FONT_SIZE, FONTS_FAMILY } from "../../contants/theme.js";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
    alignItems: "center",
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  titulo: {
    color: COLORS.white,
    fontSize: FONT_SIZE.lg,
    fontFamily: FONTS_FAMILY.bold,
  },
  subtitulo: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
    fontFamily: FONTS_FAMILY.regular,
    textAlign: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  list:{
    width: "100%",
    
  }
};
