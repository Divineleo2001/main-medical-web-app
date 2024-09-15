// http://localhost:8006/hospitals/all

"use server";

import { AxiosError } from "axios";
import axios from "axios";

const hospitalUrl = process.env.BACKEND_URL + "/hospitals";
const getAllHospitalsUrl = hospitalUrl + "/all";
// const deleteHospitalsUrl = hospitalUrl + "/" + id

export const getAllHospitals = async () => {
  try {
    const {data}= await axios.get(getAllHospitalsUrl);
    return data 
  } catch (error) {
    return error as AxiosError;
  }
};
