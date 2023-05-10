import clsx from "clsx";
import styles from "../style.module.css";
import { INVITE_INFORMATIONS } from "@/constants";

export default function ConfirmatedPage() {
  return (
    <main
      className={clsx("sm:w-1/2 mx-5 rounded-2xl py-7 px-3", styles.wrapper)}
    >
      <section className="">
        <h1 className="px-3 pt-3 font-medium text-xl text-center">
          Que incrível! Que bom que vocês vão!
        </h1>
        <p className="my-3 p-3 text-center">
          Para qualquer informação adicional, fique a vontade para entrar em
          contato conosco.
        </p>
      </section>

      <table className="w-full">
        {INVITE_INFORMATIONS.map(({ key, value, link }) => {
          const isLastItem = key === "Cidade";
          return (
            <tr key={key}>
              <td
                className={clsx("font-medium py-2 px-1", {
                  "border-b-[1px] border-moderate-lime-green": !isLastItem,
                })}
              >
                {key}
              </td>
              <td
                className={clsx("text-end py-2 px-1", {
                  "border-b-[1px] border-moderate-lime-green": !isLastItem,
                })}
              >
                {value}{" "}
                {link && (
                  <a
                    target="_blank"
                    href={link}
                    className="text-dark-lime-green underline"
                  >
                    (Veja aqui)
                  </a>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </main>
  );
}
