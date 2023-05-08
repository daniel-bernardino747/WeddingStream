"use client";
import Image from "next/image";
import { useWindowSize } from "react-use";

export function Background() {
  const { width, height } = useWindowSize();
  return (
    <>
      <Image
        src="./top-wave-bg-lg.svg"
        className="absolute top-0 -z-50"
        width={width}
        height={height}
        alt="wave-background-top"
      />
      <Image
        src="./bottom-wave-bg-lg.svg"
        className="absolute bottom-0 -z-50"
        width={width}
        height={height}
        alt="wave-background-bottom"
      />
    </>
  );
}
