import { Raleway } from "next/font/google";
import { Sora } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export const ralewaySans = Raleway({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});
export const sora = Sora({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const geistMono = GeistMono;
export const geistSans = GeistSans;
