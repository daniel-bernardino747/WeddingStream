"use client";

import { useWindowSize } from "react-use";
import { useVideoSize } from "../../hooks";

export function Video({ src }: { src: string }) {
  const { width: widthSize } = useWindowSize();
  const { widthVideo, heightVideo } = useVideoSize(widthSize);

  return (
    <iframe
      height={heightVideo}
      width={widthVideo}
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
