"use client"
import { useEffect, useState } from "react";
import { useGrootStore } from "../hooks/store"; // Replace with your store file import

export default function StatusBar() {
  const { hydration, happiness } = useGrootStore();
  const [hydrationWidth, setHydrationWidth] = useState(0);
  const [happinessWidth, setHappinessWidth] = useState(0);

  useEffect(() => {
    setHydrationWidth(hydration);
    setHappinessWidth(happiness);
  }, [hydration, happiness]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
        Hydration
      <div className="w-full bg-white rounded-[12px]">
        <div
          className="h-6 bg-[#43E0FF] rounded-[12px]"
          style={{ width: `${hydrationWidth ? hydrationWidth : 0}%` }}
        ></div>
      </div>
      Happiness
      <div className="w-full bg-white rounded-[12px]">
        <div
          className="h-6 bg-[#FF0080] rounded-[12px]"
          style={{ width: `${happinessWidth ? happinessWidth : 0}%` }}
        ></div>
      </div>
    </div>
  );
}
