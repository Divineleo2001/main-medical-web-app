"use client";
import { useGetAllHospitals } from "@/api/shared/get-hospitals";
import Loading from "@/components/shared/Loading";
import Modal from "@/components/shared/modal";
import React, { useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const HospitalList = () => {
  const { data, isLoading, isError } = useGetAllHospitals();

  const hospitals = data?.data || [];
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(null);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div>
        <Modal open={open} setOpen={setOpen} title="Edit Hospital">
          {/* Form To be created */}
          Form To be created
        </Modal>
        <div className=""></div>
        <DataTable
          isLoading={isLoading}
          columns={columns}
          data={hospitals}
          openModal={openModal}
        />
      </div>
    </>
  );
};

export default HospitalList;
