"use client";
import { Hospital } from "@/types/shared/type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Hospital>[] = [
  {
    accessorKey: "Index",
    header: "Index",
    cell: (info) => info.row.index + 1,
  },
  {
    accessorKey: "hospitalName",
    header: "Hospital Name",
  },
  {
    accessorKey: "hospitalAddress",
    header: "Hospital Address",
  },
  {
    accessorKey: "contactNumber",
    header: "Contact Number"
  },
  {
    accessorKey: "tenantId",
    header: "Tenant Id"
  }
];
