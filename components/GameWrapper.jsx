'use client'
import { useGrootStore } from "../hooks/store"; // Replace with your store file import
import Image from "next/image";

export default function GameWrapper() {
  const { name } = useGrootStore();
  return (
    <div className="flex w-full h-[100vh] flex-col justify-between  items-center">
      <div className="flex w-full justify-between items-center bg-[#342326] px-6">
    
      <Image
          src="/grow-a-groot_logo_v002-invertiert-mascot-style.png"
          alt="Logo"
          className="h-[91px] w-[150px] aspect-auto filter fill-white"
          width={1080}
          height={655}
          priority
        />
        <Image
          src="/bumble-menu.svg"
          alt="Logo"
          className="h-[30px] w-[30px] aspect-auto filter fill-white"
          width={40}
          height={40}
          priority
        />
      </div>
      <div className="flex w-full h-[100vh] flex-col justify-between  items-center px-8 py-8">
      <StatusBar />
    
      <Groot />
      <h2 className="font-thin text-3xl">{name}</h2>
      <Controls />
      </div>
   
    </div>
  );
}

import Groot from "./Groot";
import Controls from "./Controls";
import StatusBar from "./StatusBar";
