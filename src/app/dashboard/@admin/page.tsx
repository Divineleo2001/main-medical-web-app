import AdminDashboard from "@/components/admin/AdminDashboard";
import { cookies } from "next/headers";
import React from "react";

const AdminDashboardPage = () => {
  const isTenantSet = cookies().has("tenant");
  console.log(isTenantSet);
  return (
    <div>
      <AdminDashboard />
    </div>
  );
};

export default AdminDashboardPage;
