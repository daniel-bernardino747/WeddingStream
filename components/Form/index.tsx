"use client";
import { useRouter } from "next/navigation";

import { ButtonBack } from "@/components";

import { postName } from "@/services";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "@/types";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await postName(data);
    if (response.status === 200) router.push("/convite-confirmado");
  };

  return (
    <form
      className="flex flex-col gap-6 mt-6 w-[95%] mx-2 sm:w-1/2 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="text-center">
        Digite o nome de cada membro da sua família que participará.
      </label>
      <input
        type="text"
        className="w-full py-3 px-4 border-moderate-violet/10 border-[1px] rounded-md"
        placeholder="Joãozinho, Maria, ..."
        {...register("family", { required: true })}
      />
      {errors.family && <span>Campo obrigatório.</span>}

      <input
        type="submit"
        value="Enviar"
        className="font-medium max-w-xs w-1/2 bg-moderate-violet py-2 px-8 rounded-2xl text-mostly-white hover:scale-105 ease-out duration-200 mt-6 sm:mt-0"
      />

      <ButtonBack />
    </form>
  );
}
