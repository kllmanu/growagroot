'use client'
import { useGrootStore } from "../hooks/store"; // Replace with your store file import

export default function GameWrapper() {
  const { name } = useGrootStore();
  return (
    <div className="flex w-full h-[100vh] flex-col justify-between p-8 items-center">
      <h1>Grow a Groot</h1>
      <StatusBar />
      <h2>{name}</h2>
      <Groot />
      <Controls />
    </div>
  );
}

import Groot from "./Groot";
import Controls from "./Controls";
import StatusBar from "./StatusBar";
