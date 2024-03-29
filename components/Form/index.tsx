"use client";
import { useRouter } from "next/navigation";

import { ButtonBack } from "@/components";

import { postName } from "@/services";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "@/types";
import clsx from "clsx";
import styles from "../../app/style.module.css";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await postName(data);
    if (response.status === 201) router.push("/convite-confirmado");
  };

  return (
    <form
      className="flex flex-col gap-6 mt-6 w-[95%] mx-2 sm:w-1/2 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section
        className={clsx(
          "py-7 px-3 rounded-2xl flex flex-col gap-6 w-full items-center",
          styles.wrapper
        )}
      >
        <label className="text-center">
          Digite o nome de cada membro da sua família que participará.
        </label>
        <input
          type="text"
          className={clsx("w-full py-3 px-4 border-[1px] rounded-md", {
            "border-dark-lime-green": !errors.family,
            "border-[#f64333]": errors.family,
          })}
          placeholder="Joãozinho, Maria, ..."
          maxLength={75}
          {...register("family", { required: true, maxLength: 75 })}
        />
        {errors?.family?.type === "required" && (
          <span className="text-[#f64333]">Campo obrigatório.</span>
        )}
      </section>

      <input
        type="submit"
        value="Enviar"
        className="font-medium max-w-xs w-1/2 bg-dark-lime-green py-2 px-8 rounded-2xl text-mostly-white hover:scale-105 ease-out duration-200 mt-6 sm:mt-0"
      />

      <ButtonBack />
    </form>
  );
}
