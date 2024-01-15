import axios from "axios";
import { BASE_URL } from "./base_url";

export async function getDoctor(id) {
  const url = `${BASE_URL}/cpanel`;
  const doctor = await axios.post(
    url,
    { _id: Number(id) },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  // console.log(doctor);
  return doctor.data;
}

export const ONEDOCQUERY = "doctor";
