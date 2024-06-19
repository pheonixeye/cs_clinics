import axios from "axios";
// import { BASE_URL } from "./base_url";

export async function getDoctor(id) {
  // const url = `${BASE_URL}/cpanel`;
  console.log(`getDoctor(${id})`);
  const url = "../doctors.json";
  const doctors = await axios.get(url);
  // console.log(doctors.data);

  for (let index = 0; index < doctors.data.length; index++) {
    const doctor = doctors.data[index];
    if (doctor._id == id) {
      return doctor;
    }
  }

  // return doctors.data.toList();
}

export const ONEDOCQUERY = "doctor";
