export const WIDTH_VIDEO_MAX = 600;
export const HEIGHT_VIDEO_MAX = (600 * 9) / 16;

export const LINK_INVITE_CHILDREN = "https://www.youtube.com/embed/SKsBMYaSfUo";
export const LINK_INVITE_FATHER = "https://www.youtube.com/embed/3TZkEruq83M";
export const LINK_LOCATION =
  "https://www.google.com/search?q=Fiorellino+Casa+de+Eventos&oq=Fiorellino+Casa+de+Eventos&aqs=chrome..69i57.5900j0j7&sourceid=chrome&ie=UTF-8";

export const INVITE_INFORMATIONS: InviteData = [
  {
    key: "Dia",
    value: "06/08/2023",
  },
  {
    key: "Horário",
    value: "15h00",
  },
  {
    key: "Local",
    value: "Fiorellino Eventos",
    link: LINK_LOCATION,
  },
  {
    key: "Cidade",
    value: "Cocal do Sul - SC",
  },
];

type InviteData = {
  key: string;
  value: string;
  link?: string;
}[];
