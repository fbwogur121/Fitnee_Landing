import "./globals.css";
// import { Inter } from "next/font/google";
import Link from "next/link";
import Header from '../component/header'
import Footer from "@/component/footer";
import localFont from 'next/font/local'

const myFont = localFont({ 
  src: '../public/fonts/pretendard.woff2',
 })

export const metadata = {
  title: "Fitnee",
  description: "피트니 fitnee 공식 사이트입니다.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body style={myFont.style}>
        <Header/>
        <div className="children">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
