"use client";
import { useRouter } from "next/navigation";

export function ButtonBack() {
  const router = useRouter();
  return (
    <button type="button" className="" onClick={() => router.back()}>
      Voltar
    </button>
  );
}
