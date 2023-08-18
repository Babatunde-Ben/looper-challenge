"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="flex">
      <div className=" border-r-2 border-[#E3E3E3] px-2 py-4 w-72">
        <span className="inline-block rounded-xl p-3  hover:bg-[#F5F5F5]/50 cursor-pointer mb-3 hover:shadow-sm">
          <Image
            src="/SVGs/back-button.svg"
            alt="back-botton"
            width={20}
            height={20}
          />
        </span>
        <div>
          <Link
            href="messages"
            className={` rounded-lg px-4 py-2  flex items-center gap-2 mb-2 hover:bg-[#F5F5F5]/50 ${
              pathname.split("/").pop() === "messages" &&
              "bg-[#F5F5F5] shadow-sm"
            }`}
          >
            <Image
              src="/SVGs/message-text.svg"
              alt="home"
              width={20}
              height={20}
            />
            <span className="whitespace-nowrap font-semibold text-[#606060]">
              Messages
            </span>
          </Link>
          <Link
            href="manage-campaigns"
            className={` rounded-lg px-4 py-2  flex items-center gap-2 mb-2 hover:bg-[#F5F5F5]/50 ${
              pathname.split("/").pop() === "manage-campaigns" &&
              "bg-[#F5F5F5] shadow-sm"
            }`}
          >
            <Image
              src="/SVGs/sms-tracking.svg"
              alt="home"
              width={20}
              height={20}
            />
            <span className="whitespace-nowrap font-semibold text-[#606060]">
              Manage campaigns
            </span>
          </Link>
          <Link
            href="scheduled-messages"
            className={` rounded-lg px-4 py-2  flex items-center gap-2 mb-2 hover:bg-[#F5F5F5]/50 ${
              pathname.split("/").pop() === "scheduled-messages" &&
              "bg-[#F5F5F5] shadow-sm"
            }`}
          >
            <Image
              src="/SVGs/message-time.svg"
              alt="home"
              width={20}
              height={20}
            />
            <span className="whitespace-nowrap font-semibold text-[#606060]">
              Scheduled messages
            </span>
          </Link>
          <Link
            href="drafts"
            className={` rounded-lg px-4 py-2  flex items-center gap-2 mb-2 hover:bg-[#F5F5F5]/50 ${
              pathname.split("/").pop() === "drafts" && "bg-[#F5F5F5] shadow-sm"
            }`}
          >
            <Image
              src="/SVGs/message-edit.svg"
              alt="home"
              width={20}
              height={20}
            />
            <span className="whitespace-nowrap font-semibold text-[#606060]">
              Drafts
            </span>
          </Link>
        </div>
      </div>
      {children}`
    </div>
  );
};

export default Layout;
