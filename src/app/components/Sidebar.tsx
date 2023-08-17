import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar border-r-2 border-[#E3E3E3] px-2 py-4 h-[calc(100vh-70px)] overflow-y-scroll ">
      <div className="flex flex-col items-center gap-3 mb-20">
        <div className=" rounded-xl p-3 hover:bg-[#F5F5F5] cursor-pointer  hover:shadow-sm">
          <Image
            src="/SVGs/back-button.svg"
            alt="back-botton"
            width={20}
            height={20}
          />
        </div>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image src="/SVGs/home.svg" alt="home" width={24} height={24} />
        </Link>

        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/message-text.svg"
            alt="message-text"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image src="/SVGs/lock.svg" alt="lock" width={24} height={24} />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/sms-notification.svg"
            alt="sms-notification"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/campaigns/messages"
          className=" rounded-xl p-3 bg-[#F5F5F5] shadow-sm"
        >
          <Image
            src="/SVGs/volume-high.svg"
            alt="campaign"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/user-tag.svg"
            alt="user-pofile"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image src="/SVGs/messages-2.svg" alt="chat" width={24} height={24} />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image src="/SVGs/graph.svg" alt="graph" width={24} height={24} />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image src="/SVGs/shop.svg" alt="shop" width={24} height={24} />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/setting-2.svg"
            alt="settings"
            width={24}
            height={24}
          />
        </Link>
      </div>

      <div className="flex flex-col items-center gap-3">
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/logout.svg"
            alt="back-botton"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 relative hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/notification.svg"
            alt="back-botton"
            width={24}
            height={24}
          />{" "}
          <span className="absolute right-2 top-1 bg-[#E90000] rounded-full w-5 h-5 leading-5 text-center inline-block text-xs text-white font-semibold ">
            5
          </span>
        </Link>
        <Link
          href="/"
          className="inline-block w-10 h-10 leading-10 rounded-full bg-[#009688] text-white font-semibold text-lg text-center hover:bg-[#36998f] "
        >
          F
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
