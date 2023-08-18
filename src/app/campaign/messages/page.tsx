import Draft from "@/app/components/Draft";
import Image from "next/image";
import React from "react";

const Messages = () => {
  return (
    <section className="px-3 py-8  w-full md:pl-4 md:pr-16">
      <div className="flex flex-wrap justify-between items-center gap-x-3 gap-y-5 mb-8">
        <div className="bg-[#FAFAFA] px-3 py-2 flex items-center w-80 h-10 gap-3">
          <Image src="/SVGs/search.svg" alt="search" width={20} height={20} />
          <input
            type="text"
            placeholder="Search for drafts"
            className="w-full outline-none border-none bg-transparent"
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="h-10 flex gap-3 items-center justify-between  px-4 rounded-[10px] border border-[#E8E8E8] cursor-pointer hover:bg-[#f7f7f7]">
            <p className="font-extrabold whitespace-nowrap text-sm">
              Sender ID
            </p>
            <Image
              src="/SVGs/arrow-down.svg"
              alt="down arrow"
              width={10}
              height={10}
            />
          </div>
          <button className="outline-none rounded-[10px] bg-[#1E1E1E] text-white px-5 h-10 font-semibold whitespace-nowrap text-sm hover:bg-[#3a3a3a]">
            {" "}
            Start a Campaign
          </button>
        </div>
      </div>

      <h2 className="text-xl font-extrabold mb-7">Drafts</h2>
      <div className="flex flex-wrap items-center gap-5">
        <Draft />
        <Draft />
        <Draft />
      </div>
    </section>
  );
};

export default Messages;
