import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { cookies } from "next/headers";

const AdminDashboard = () => {

  return (
    <div>
      <div className="flex gap-2 p-10">
        <div>
          <div className="flex flex-row gap-2 p-5 bg-red-500  ">
            Hospitals
            <Button>
              <Link href={"/dashboard/hospitals"}>All hospital list</Link>
            </Button>
          </div>
        </div>

        <div>
          <div className="flex flex-row gap-2 p-5 bg-red-500  ">
            Users

            <Button >
              <Link href={"/dashboard/users"}>All Users</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
