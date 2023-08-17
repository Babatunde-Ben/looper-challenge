import React from "react";

const Draft = () => {
  return (
    <div className="bg-[#FAFAFA] rounded-lg w-full px-5 py-4 shadow-sm sm:w-1/2 md:w-80">
      <p className="font-semibold text-xs mb-3 text-right">12, Jun 2022</p>
      <p className="text-xs text-[#C4C4C4] mb-2 uppercase font-bold">title</p>
      <p className="text-lg mb-9 font-extrabold">Title</p>
      <p className="text-xs flex items-center gap-2 mb-5">
        <span className="uppercase font-bold text-[#C4C4C4]">progress</span>
        <span className="text-[#E9BA00] bg-[#E9BA00]/10 h-5 w-9 shadow-sm leading-5 text-xs font-bold text-center rounded-xl">
          40%
        </span>
      </p>

      <div className="flex gap-2 items-center mb-8">
        <p className="bg-[#1E1E1E] h-4 w-4 rounded-full flex justify-center items-center relative">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="#ffffff"
            className=" w-3/5 h-3/5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <span className="absolute left-0 -bottom-6 font-bold text-xs text-[#1E1E1E]">
            Message
          </span>
        </p>
        {/* first progress */}
        <div className="bg-[#E3E3E3] h-[3px] w-20 relative">
          <span className="bg-[#1E1E1E] inline-block w-[80%] h-full absolute top-0 left-0"></span>
        </div>
        <p className="bg-[#C3C3C3] h-4 w-4 rounded-full flex justify-center items-center relative">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="#ffffff"
            className=" w-3/5 h-3/5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <span className="absolute left-0 -bottom-6 font-bold text-xs text-[#C4C4C4]">
            Recipents
          </span>
        </p>

        {/* second progress */}
        <div className="bg-[#E3E3E3] h-[3px] w-20 relative">
          <span className="bg-[#1E1E1E] inline-block w-[0%] h-full absolute top-0 left-0"></span>
        </div>

        <p className="bg-[#C3C3C3] h-4 w-4 rounded-full flex justify-center items-center relative">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="#ffffff"
            className=" w-3/5 h-3/5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <span className="absolute left-0 -bottom-6 font-bold text-xs text-[#C4C4C4]">
            Delivery
          </span>
        </p>
      </div>
      <span className="inline-block w-full h-[2px] bg-[#E3E3E3] my-3"></span>
      <p className="font-extrabold text-sm text-right">Continue {">>"}</p>
    </div>
  );
};

export default Draft;
