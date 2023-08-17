import React from "react";

const Draft = () => {
  return (
    <div className="bg-[#FAFAFA] rounded-lg w-80 px-5 py-4">
      <p className="font-semibold text-xs mb-3 text-right">12, Jun 2022</p>
      <p className="text-xs text-[#C4C4C4] mb-2 uppercase font-bold">title</p>
      <p className="text-lg mb-8 font-extrabold">Title</p>
      <p className="text-xs flex items-center gap-2">
        <span className="uppercase font-bold text-[#C4C4C4]">progress</span>
        <span className="text-[#E9BA00] bg-[#E9BA00]/10 h-5 w-9 shadow-sm leading-5 text-xs font-bold text-center">
          40%
        </span>
      </p>
      <span className="inline-block w-full h-[2px] bg-[#E3E3E3] my-3"></span>
      <p className="font-extrabold text-sm text-right">Continue {">>"}</p>
    </div>
  );
};

export default Draft;
