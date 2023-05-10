import { Inputs } from "@/types";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function postName(data: Inputs) {
  return axios
    .post(`${apiUrl}/convite`, data)
    .then((response) => response.data);
}
