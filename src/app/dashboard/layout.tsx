interface DashboardLayoutProps {
  patient: React.ReactNode;
  admin: React.ReactNode;
  doctor: React.ReactNode;
}

// Check for which layout to render based on the role present while logging in

enum Role {
  Admin = "admin",
  Patient = "patient",
  Doctor = "doctor",
}

const role: Role = Role.Patient;
export default function DashboardLayout({
  patient,
  admin,
  doctor,
}: DashboardLayoutProps) {
  if (role === "patient") {
    return <>{patient}</>;
  } else if (role === "admin") {
    return <>{admin}</>;
  } else if (role === "doctor") {
    return <>{doctor}</>;
  }
}
