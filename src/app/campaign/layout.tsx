"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isCampaignDropdownOpen, setIsCampaignDropdownOpen] = useState(true);
  return (
    <div className="flex h-[calc(100vh-70px)]">
      <div className=" border-r-2 border-[#E3E3E3] px-2 py-4 w-56">
        <span className="inline-block rounded-xl p-3  hover:bg-[#F5F5F5]/50 cursor-pointer mb-3 hover:shadow-sm">
          <Image
            src="/SVGs/back-button.svg"
            alt="back-botton"
            width={20}
            height={20}
          />
        </span>
        <p
          onClick={() => setIsCampaignDropdownOpen(!isCampaignDropdownOpen)}
          className="px-2 py-2 mb-3 font-bold flex gap-2 items-center cursor-pointer select-none"
        >
          <Image
            src="/SVGs/arrow-down-stroke.svg"
            alt="arrow-down"
            width={30}
            height={30}
            className={isCampaignDropdownOpen ? "scale-[-1]" : "scale-100"}
          />
          <span>Campaigns</span>
        </p>
        <div className={isCampaignDropdownOpen ? "block" : "hidden"}>
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
            <span className="whitespace-nowrap font-semibold text-[#606060] text-sm">
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
            <span className="whitespace-nowrap font-semibold text-[#606060] text-sm">
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
            <span className="whitespace-nowrap font-semibold text-[#606060] text-sm">
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
            <span className="whitespace-nowrap font-semibold text-[#606060] text-sm">
              Drafts
            </span>
          </Link>
        </div>
      </div>
      <section className=" flex-1 h-[calc(100vh-70px)] overflow-y-scroll">
        {children}
      </section>
    </div>
  );
};

export default Layout;
