import axios from "axios";

async function getDoctors() {
  const url = "https://cosmosurgeserver.xyz/cpanel";
  const doctors = await axios.get(url);
  return doctors;
}

export async function loader() {
  const data = await getDoctors();
  return { data };
}
