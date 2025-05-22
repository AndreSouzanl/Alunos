import { COLORS, FONT_SIZE, FONTS_FAMILY } from "../../contants/theme.js";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
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
    width: 120,
    height: 120,
  },
};
