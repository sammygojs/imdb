// "user client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
import About from "./about/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Generated by Sumit"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {/* <Headers/> */}
        <Header/>
        
        <About />
        {/* <Navbar/> */}

        {/* <SearchBox/> */}
        
        {children}
        </Providers>
        </body>
    </html>
  );
}
