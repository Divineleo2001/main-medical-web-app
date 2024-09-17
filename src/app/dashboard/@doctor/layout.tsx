// boiler plate for layout

import SignOut from "@/components/shared/SignOut";

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignOut />
      {children}
    </>
  );
}
