"use client";
import { useGetAllUsers } from "@/api/admin/get-users";
import React from "react";

const UsersList = () => {
  const { data } = useGetAllUsers();

  return (
    <div>
      All users
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UsersList;
