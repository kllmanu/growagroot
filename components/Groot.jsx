"use client"

import IdleGroot from "./animations/IdleGroot";
import Water from "./animations/Water";
import Hearts from "./animations/Hearts";
import { useGrootStore } from "../hooks/store.js";


export default function Groot() {
  const { status, pet } = useGrootStore();
  return (
    <div
      style={{
        borderRadius: 99999,
        border: '4px solid #412126',
        boxShadow: '0 0 0 4px #7d6769, 0 0 0 8px #412126',
      }}
      className="text-black flex bg-white mt-6 mb-6 justify-center items-center w-full h-[300px]"
    >
      <IdleGroot />
      {status === "petting" && <Hearts />}
      {status === "watering" && <Water />}
    </div>
  );
}
