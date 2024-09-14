// import { Navbar } from "@/modules/navigation/Navbar"

import { Navbar } from "@/components/patient/Navbar";
import { fetchMockSpecialities } from "@/server/patient/fetch-mock-specialities";

export default async function Layout({ children }: { children: React.ReactNode }) {

  const specialities = await fetchMockSpecialities();

  console.log(specialities)

  return (
    <>
    <Navbar specialtyData={specialities} >

      {children}
    </Navbar>
    </>
  );
}
