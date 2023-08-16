import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className=" border-r-2 border-[#E3E3E3] px-2 py-4 h-screen overflow-y-scroll ">
      <div className="flex flex-col items-center gap-2 mb-20">
        <div className=" rounded-xl p-3 bg-[#F5F5F5]  hover:shadow-sm">
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
          <Image
            src="/SVGs/home.svg"
            alt="back-botton"
            width={24}
            height={24}
          />
        </Link>

        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/message-text.svg"
            alt="back-botton"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/lock.svg"
            alt="back-botton"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/sms-notification.svg"
            alt="back-botton"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/" className=" rounded-xl p-3 bg-[#F5F5F5] shadow-sm">
          <Image
            src="/SVGs/volume-high.svg"
            alt="back-botton"
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
            alt="back-botton"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/messages-2.svg"
            alt="back-botton"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/graph.svg"
            alt="back-botton"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/shop.svg"
            alt="back-botton"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/"
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/setting-2.svg"
            alt="back-botton"
            width={24}
            height={24}
          />
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2">
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
          className=" rounded-xl p-3 hover:bg-[#F5F5F5] hover:shadow-sm"
        >
          <Image
            src="/SVGs/notification.svg"
            alt="back-botton"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/"
          className="inline-block w-10 h-10 leading-10 rounded-full bg-[#009688] text-white font-semibold text-lg text-center"
        >
          F
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
