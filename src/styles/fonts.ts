import localFont from "next/font/local";
import { Inter, Roboto } from "next/font/google";

export const fontVarien = localFont({ src: "./varien.otf" });

export const fontInter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const fontRoboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
