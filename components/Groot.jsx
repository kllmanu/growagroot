"use client"

import IdleGroot from "./animations/IdleGroot";
import Water from "./animations/Water";
import Hearts from "./animations/Hearts";
import { useGrootStore } from "../hooks/store.js";
import HappyGroot from "./animations/HappyGroot";
import SadGroot from "./animations/SadGroot";
import { useEffect } from "react";

export default function Groot() {
  const { status, animationCount, happiness } = useGrootStore();
  const { startHydrationTimer, startHappinessTimer } = useGrootStore();

  useEffect(() => {
    startHydrationTimer(); // start the hydration timer when the component mounts
    startHappinessTimer(); // start the hydration timer when the component mounts
    return () => {
      // cleanup function to stop the hydration timer when the component unmounts
      const { timerId } = useGrootStore.getState();
      const { happinessTimerId } = useGrootStore.getState();
      clearInterval(timerId);
      clearInterval(happinessTimerId);
    };
  }, []);

  const renderAnimations = () => {
    const animations = [];
    const animationCounter = animationCount || 0;
    for (let i = 0; i < animationCounter; i++) {
      if (status === "playing") {
        animations.push(<Hearts key={i} />);
      } else if (status === "watering") {
        animations.push(<Water key={i} />);
      }
    }

    return animations;
  };

  return (
    <div
      style={{
        borderRadius: 99999,
        border: '4px solid #412126',
        boxShadow: '0 0 0 4px #7d6769, 0 0 0 8px #412126',
      }}
      className="text-black flex bg-white mt-6 mb-6 justify-center items-center w-full h-[300px]"
    >
      { happiness > 50 ? <HappyGroot /> : happiness < 30 ? <SadGroot /> : <IdleGroot /> }
      {renderAnimations()}
    </div>
  );
}

