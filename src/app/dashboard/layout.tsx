import { useAuth } from "@/context/AuthContextProvider";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  patient: React.ReactNode;
  admin: React.ReactNode;
  doctor: React.ReactNode;
}

// Check for which layout to render based on the role present while logging in

export default function DashboardLayout({
  patient,
  admin,
  doctor,
}: DashboardLayoutProps) {
  const role = cookies().get("role")?.value;

  if (!role) {
    redirect("/auth/login");
  }

  switch (role) {
    case "PATIENT":
      return <>{patient}</>;
    case "ADMIN":
      return <>{admin}</>;
    case "DOCTOR":
      return <>{doctor}</>;
    default:
      return <div>Unauthorized Access</div>;
  }
}
