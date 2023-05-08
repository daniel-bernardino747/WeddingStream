"use client";
import { useSearchParams } from "next/navigation";
import { ButtonBack, ButtonSubmit, Form, Table } from "@/components";

export default function InviteSubmitPage() {
  const searchParams = useSearchParams();
  const isNameConfirmed = searchParams.get("confirme-nome");

  if (isNameConfirmed) {
    return <Form />;
  }

  return (
    <>
      <main className="sm:w-1/2 mx-5 py-2">
        <Table />

        <section className="bg-desaturated-red/10">
          <p className="my-3 p-3">
            Olá, estamos convidando você e sua família para participar da nossa
            comemoração de 25 anos de casamento de Indiamara e Jadson.
          </p>
        </section>
      </main>

      <ButtonSubmit
        path="/convite?confirme-nome=true"
        placeholder="Confirmar presença"
      />
      <ButtonBack />
    </>
  );
}
