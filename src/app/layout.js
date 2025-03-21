import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Layouts/Header/page";
import Footer from "@/Components/Layouts/Footer/page";
import { ModuleProvider } from '@/Components/ModuleContext/page'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        <ModuleProvider>
        <Header />
        {children}
        <Footer/>
        </ModuleProvider>
      
      </body>
    </html>
  );
}
