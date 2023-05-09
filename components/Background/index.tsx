"use client";
import clsx from "clsx";
import Image from "next/image";
import { useWindowSize } from "react-use";
import styles from "../../app/style.module.css";

export function Background() {
  const { width } = useWindowSize();

  let maxWidth = 200;

  if (width < 680) maxWidth = 120;
  if (width < 425) maxWidth = 80;

  return (
    <>
      <div className={styles.set}>
        <LeafImage src="/leaf-1.png" width={maxWidth} />
        <LeafImage src="/leaf-2.png" width={maxWidth} />
        {/* <LeafImage src="/leaf-3.png" width={maxWidth} /> */}
        <LeafImage src="/leaf-4.png" width={maxWidth} />
        <LeafImage src="/leaf-1.png" width={maxWidth} />
        {/* <LeafImage src="/leaf-2.png" width={maxWidth} /> */}
        <LeafImage src="/leaf-3.png" width={maxWidth} />
        <LeafImage src="/leaf-4.png" width={maxWidth} />
      </div>
      <div className={clsx(styles.set, styles.set2)}>
        {/* <LeafImage src="/leaf-1.png" width={maxWidth} /> */}
        {/* <LeafImage src="/leaf-2.png" width={maxWidth} /> */}
        <LeafImage src="/leaf-3.png" width={maxWidth} />
        <LeafImage src="/leaf-4.png" width={maxWidth} />
        <LeafImage src="/leaf-1.png" width={maxWidth} />
        {/* <LeafImage src="/leaf-2.png" width={maxWidth} /> */}
        <LeafImage src="/leaf-3.png" width={maxWidth} />
        <LeafImage src="/leaf-4.png" width={maxWidth} />
      </div>
      <div className={clsx(styles.set, styles.set3)}>
        <LeafImage src="/leaf-1.png" width={maxWidth} />
        {/* <LeafImage src="/leaf-2.png" width={maxWidth} /> */}
        <LeafImage src="/leaf-3.png" width={maxWidth} />
        <LeafImage src="/leaf-4.png" width={maxWidth} />
        <LeafImage src="/leaf-1.png" width={maxWidth} />
        {/* <LeafImage src="/leaf-2.png" width={maxWidth} /> */}
        <LeafImage src="/leaf-3.png" width={maxWidth} />
        {/* <LeafImage src="/leaf-4.png" width={maxWidth} /> */}
      </div>
    </>
  );
}

const LeafImage = ({ src, width }: { src: string; width: number }) => {
  return (
    <div className="relative block">
      <Image
        src={src}
        className={clsx("", styles.animationTop)}
        height={0}
        width={width}
        alt="wave-background-top"
      />
    </div>
  );
};
