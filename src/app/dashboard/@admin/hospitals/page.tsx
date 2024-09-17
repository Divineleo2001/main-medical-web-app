import HospitalList from "@/components/admin/hospitals/HospitalList";
import Loading from "@/components/shared/Loading";
import React, { Suspense } from "react";

const HospitalsPage = () => {
  return (
    <>
      <main>
        <div className="relative">
          <div className="flex justify-between">
            <h1>Hospitals</h1>
          </div>
            <Suspense fallback={<Loading />}>
              <HospitalList />
            </Suspense>
        </div>
      </main>
    </>
  );
};

export default HospitalsPage;
