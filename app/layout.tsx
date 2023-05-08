import "./globals.css";
import { Work_Sans } from "next/font/google";

import { Background, StageProgress } from "@/components";
import clsx from "clsx";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Convite especial - Bodas",
  description:
    "Crie um convite de casamento moderno e personalizado com vídeos dos noivos em nosso site. Compartilhe sua história de amor de forma única e torne seu convite de casamento inesquecível",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="relative bg-mostly-white">
      <Background />
      <body
        className={clsx(
          "flex flex-col items-center justify-center gap-4 w-screen h-screen",
          inter.className
        )}
      >
        <StageProgress />
        {children}
      </body>
    </html>
  );
}
