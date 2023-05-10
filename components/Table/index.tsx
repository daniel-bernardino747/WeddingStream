import clsx from "clsx";

import { INVITE_INFORMATIONS } from "@/constants";

export function Table() {
  return (
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
  );
}
