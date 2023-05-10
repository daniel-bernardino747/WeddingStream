"use client";
import { useRouter } from "next/navigation";

export function ButtonSubmit({
  path,
  placeholder,
}: {
  path: string;
  placeholder: string;
}) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="font-medium bg-dark-lime-green py-2 px-8 rounded-2xl text-mostly-white hover:scale-105 ease-out duration-200 mt-6 sm:mt-0"
      onClick={() => router.push(path)}
    >
      {placeholder}
    </button>
  );
}
