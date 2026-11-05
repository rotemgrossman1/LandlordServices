import { Frank_Ruhl_Libre, Heebo } from "next/font/google";

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
