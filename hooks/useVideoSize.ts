import { HEIGHT_VIDEO_MAX, WIDTH_VIDEO_MAX } from "../constants";

export const useVideoSize = (widthWindow: number) => {
  const radioHeigth = (widthWindow * 9) / 16;

  const widthVideo =
    widthWindow > WIDTH_VIDEO_MAX ? WIDTH_VIDEO_MAX - 40 : widthWindow - 40;

  const heightVideo =
    radioHeigth > HEIGHT_VIDEO_MAX ? HEIGHT_VIDEO_MAX : radioHeigth;

  return { widthVideo, heightVideo };
};
