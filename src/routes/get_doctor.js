import axios from "axios";

export async function getDoctor(id) {
  const url = "https://cosmosurgeserver.xyz/cpanel";
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
