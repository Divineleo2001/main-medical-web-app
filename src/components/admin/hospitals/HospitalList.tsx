"use client";
import { useGetAllHospitals } from "@/api/shared/get-hospitals";
import Loading from "@/components/shared/Loading";
import Modal from "@/components/shared/modal";
import React, { useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import HospitalForm from "./HospitalForm";
import { useRouter } from "next/navigation";

const HospitalList = () => {
  const { data, isLoading, isError } = useGetAllHospitals();

  const hospitals = data?.data || [];
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div>
        <Modal open={open} setOpen={setOpen} title="Create Hospital">
          <HospitalForm />
        </Modal>
        <div className="absolute right-0 top-0">
          <Button onClick={() => router.replace("/dashboard/hospitals/create")}>
            +
          </Button>
        </div>
        <div className="mt-10 mx-20">
          <DataTable
            isLoading={isLoading}
            columns={columns}
            data={hospitals}
          />
        </div>
      </div>
    </>
  );
};

export default HospitalList;
