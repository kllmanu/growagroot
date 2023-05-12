export default function GameWrapper() {
  return (
    <div className="flex w-full h-[100vh] flex-col justify-between p-8 items-center">
      <h1>Grow a Groot</h1>
      <Groot />
      <Controls />
    </div>
  );
}

import Groot from "./Groot";
import Controls from "./Controls";
