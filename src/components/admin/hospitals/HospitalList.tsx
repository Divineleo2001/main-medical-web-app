"use client";
import { useGetAllHospitals } from "@/api/admin/get-hospitals";
import Loading from "@/components/shared/Loading";
import React from "react";

const HospitalList = () => {
  const { data, isLoading, isError } = useGetAllHospitals();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>HospitalList</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HospitalList;
