import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import { Sora } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Ritik Kumar | Portfolio',
  description: 'MERN Developer and DSA Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.className} dark`}>
      <body className="bg-gray-900 text-white">
        <Navbar />
        <SocialSidebar />
        {children}
      </body>
    </html>
  )
}