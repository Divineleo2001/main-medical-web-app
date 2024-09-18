// http://localhost:8006/hospitals/all

"use server";

import { HospitalAuthForm } from "@/types/shared/type";
import { AxiosError } from "axios";
import axios from "axios";
import { cookies } from "next/headers";

const hospitalUrl = process.env.BACKEND_URL + "/hospitals";
const getAllHospitalsUrl = hospitalUrl + "/all";
// const deleteHospitalsUrl = hospitalUrl + "/" + id
const authToken = cookies().get("token")?.value;


export const getAllHospitals = async () => {
  try {
    const { data } = await axios.get(getAllHospitalsUrl);
    return data;
  } catch (error) {
    return error as AxiosError;
  }
};

// create request
export const createHospital = async (params: HospitalAuthForm) => {
  try {
    const { data } = await axios.post(hospitalUrl, params, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return data;
  } catch (error) {
    return error as AxiosError;
  }
};
