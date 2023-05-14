"use client"

import { useGrootStore } from "../hooks/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import Groot from "./Groot";
import Controls from "./Controls";
import StatusBar from "./StatusBar";

export default function GameWrapper() {
  const { name, created, hydration } = useGrootStore();
  const [aliveTime, setAliveTime] = useState("");
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (hydration > 0) {
      const id = setInterval(() => {
        const currentTime = new Date();
        const createdTime = new Date(created);
        const timeDiff = Math.floor((currentTime - createdTime) / 1000); // Calculate the time difference in seconds
        const minutes = Math.floor(timeDiff / 60);
        const seconds = timeDiff % 60;
        setAliveTime(`${minutes}:${seconds.toString().padStart(2, "0")}`);
      }, 1000); // Update the alive time every second
      setIntervalId(id);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId); // Clear interval on unmount
      }
    };
  }, [created, hydration]);

  useEffect(() => {
    if (hydration === 0 && intervalId) {
      clearInterval(intervalId);
    }
  }, [hydration, intervalId]);
  const isBrowser = typeof window !== "undefined";

  if (isBrowser) {
    return (
      <div className="sm:bg-[#83a6bb]">
        <div className="w-full sm:w-96 mx-auto h-[100vh] flex justify-center items-center">
          <div className="flex w-full h-[100vh] sm:h-[844px] flex-col justify-between items-center sm:drop-shadow-md">
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
            <div className="flex w-full text-white h-[100vh] flex-col justify-between items-center bg-[#412126] px-8 py-8">
              <StatusBar/>
              <Groot />
              <h2 className="font-medium text-3xl">{name}</h2>
              {aliveTime && <p className="font-light text-lg tracking-wide">ALIVE FOR {aliveTime}</p>}
              <Controls />
            </div>
          </div>
        </div>
      </div>
    );
    }
    else  {
      return (<div>loading...</div>);
    }

}
