'use client'
import { useGrootStore } from '../hooks/store.js';
import Image from "next/image";

export default function Controls() {
  const { water, play, pet } = useGrootStore();
  
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <button 
        onClick={water}
        className="bg-[#43E0FF] mr-2 text-black font-bold py-2 px-4 rounded-[12px]">
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
        onClick={pet}
        className="bg-[#FF0080] ml-2 text-black font-bold py-2 px-4 rounded-[12px]">
        <Image
          src="/play.svg"
          alt="Play"
          className="h-[50px]"
          width={50}
          height={50}
          priority
        />
      </button>
      {/* <button 
        onClick={pet}
        className="bg-sky-50 hover:bg-sky-100 text-black font-bold py-2 px-4 rounded">
        <Image
          src="/heart.svg"
          alt="Pet"
          className="h-[50px]"
          width={50}
          height={50}
          priority
        />
      </button> */}
    </div>
  );
}
