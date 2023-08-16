import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Sidebar from "./components/Sidebar";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Looper",
  description: "Looper campaign dashboard ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="border-b-2 border-[#E3E3E3] p-3">
          <Image
            src="/images/looper-logo.png"
            alt="looper-logo"
            width={35}
            height={35}
          />
        </div>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
