export default function Controls() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <button className="bg-sky-50 hover:bg-sky-100 text-black font-bold py-2 px-4 rounded">
        <Image
          src="/waterdrop.svg"
          alt="Water"
          className="h-[50px]"
          width={50}
          height={50}
          priority
        />
      </button>
      <button className="bg-sky-50 hover:bg-sky-100 text-black font-bold py-2 px-4 rounded">
      <Image
          src="/dice-solid.svg"
          alt="Play"
          className="h-[50px]"
          width={50}
          height={50}
          priority
        />
      </button>
      <button className="bg-sky-50 hover:bg-sky-100 text-black font-bold py-2 px-4 rounded">
      <Image
          src="/heart.svg"
          alt="Pet"
          className="h-[50px]"
          width={50}
          height={50}
          priority
        />
      </button>
    </div>
  );
}

import Image from "next/image";
