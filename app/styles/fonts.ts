import { Figtree, Poppins } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-base",
});

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export { figtree, poppins };
