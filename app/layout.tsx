import "./globals.css";
import { figtree, poppins } from "../app/styles/fonts";

export const metadata = {
  title: "Parallax w/Framer",
  description: "Parallax w Framer Next.js and Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${figtree.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
