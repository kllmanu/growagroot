"use client";
import { useGrootStore } from "../hooks/store.js";
import Image from "next/image";

export default function Controls() {
  const { water, play } = useGrootStore();

  return (
    <div className="w-full text-white flex flex-row justify-center items-center z-[80]">
      <button
        onClick={water}
        className="bg-[#43E0FF] mr-2 text-black font-bold py-2 px-4 rounded-[12px]"
      >
        <Image
          src="/waterdrop-icon.svg"
          alt="Water"
          className="h-[50px] filter fill-white"
          width={50}
          height={50}
          priority
        />
      </button>
      <button
        onClick={play}
        className="bg-[#FF0080] ml-2 text-black font-bold py-2 px-4 rounded-[12px]"
      >
        <Image
          src="/play.svg"
          alt="Play"
          className="h-[50px]"
          width={50}
          height={50}
          priority
        />
      </button>
    </div>
  );
}
