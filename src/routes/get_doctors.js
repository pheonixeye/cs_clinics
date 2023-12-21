import axios from "axios";

export async function getDoctors() {
  // const url = "https://cosmosurgeserver.xyz/cpanel";
  const url = "http://127.0.0.1:5500/src/assets/doctors.json";
  const doctors = await axios.get(url);
  console.log(doctors);
  return doctors;
}

export const MAINQUERY = "doctors";

export async function loader() {
  const data = await getDoctors();
  return { data };
}
