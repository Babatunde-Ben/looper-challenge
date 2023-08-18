import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Link from "next/link";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Looper",
  description: "A dashboard coding assessment ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} `}>
        <div className="border-b-2 border-[#E3E3E3] bg-white w-full h-[70px] flex items-center p-4">
          <Link href="/">
            {" "}
            <Image
              src="/images/looper-logo.png"
              alt="looper-logo"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className="flex">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
