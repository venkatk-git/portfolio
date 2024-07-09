import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <link rel="icon" href="./favicon.ico" />
        <title>Venkat</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
