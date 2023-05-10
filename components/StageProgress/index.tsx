"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function StageProgress() {
  const path = usePathname() || "/";

  return (
    <div className="flex items-center">
      <StageIcon stageNumber={1} inProgress={path === "/"} />
      <LineBetween />
      <StageIcon stageNumber={2} inProgress={path === "/convite"} />
      <LineBetween />
      <StageIcon stageNumber={3} inProgress={path === "/convite-confirmado"} />
    </div>
  );
}

const StageIcon = ({
  stageNumber,
  inProgress,
}: {
  stageNumber: number;
  inProgress: boolean;
}) => {
  return (
    <div
      className={clsx(
        "rounded-full h-8 w-8 border-2 border-moderate-lime-green flex items-center justify-center",
        { "bg-moderate-lime-green": inProgress }
      )}
    >
      <p
        className={clsx("font-medium text-lg", {
          "text-mostly-white": inProgress,
          "text-moderate-lime-green": !inProgress,
        })}
      >
        {stageNumber}
      </p>
    </div>
  );
};

const LineBetween = () => {
  return <div className="h-[2px] w-10 flex-grow bg-moderate-lime-green"></div>;
};
