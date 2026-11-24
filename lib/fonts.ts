import { Assistant, Frank_Ruhl_Libre, Heebo } from "next/font/google";
import localFont from "next/font/local";

export const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heebo",
});

// Display serif (the design's Instrument Serif has no Hebrew)
export const frank = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-frank",
});

// Article page titles
export const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-assistant",
});

// Hebrew titles (Varela Round, SIL Open Font License: font-files/VarelaRound-OFL.txt)
export const varela = localFont({
  src: "./font-files/VarelaRound-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-varela",
});
