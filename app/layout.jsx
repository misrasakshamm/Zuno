import "./globals.css";
import { Inter, Orbitron } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const logo = Orbitron({ subsets: ["latin"], weight: ["900"], variable: "--font-logo" });
export const metadata = { title: "Zuno", description: "Movies, TV shows and web series" };
export default function RootLayout({ children }) {
  return (<html lang="en"><body className={`${inter.variable} ${logo.variable}`}>{children}</body></html>);
}
