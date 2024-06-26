import axios from "axios";
// import { BASE_URL } from "./base_url";

export async function getDoctors() {
  // const url = `${BASE_URL}/cpanel`;
  const url = "./doctors.json";
  const doctors = await axios.get(url);
  // console.log(doctors);
  return doctors;
}

export const MAINQUERY = "doctors";

export async function loader() {
  const data = await getDoctors();
  return { data };
}
