import Link from "next/link";
import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex">
        <div>
          Hospitals Hospitals Count
          <Link href={"/dashboard/hospitals"}>All hospital list</Link>
        </div>

        <div>Users</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
