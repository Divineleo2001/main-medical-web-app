// import Link from "next/link";
// import React from "react";
// import { Button } from "../ui/button";
// import { cookies } from "next/headers";

// const AdminDashboard = () => {

//   return (
//     <div>
//       <div className="flex gap-2 p-10">
//         <div>
//           <div className="flex flex-row gap-2 p-5 bg-red-500  ">
//             Hospitals
//             <Button>
//               <Link href={"/dashboard/hospitals"}>All hospital list</Link>
//             </Button>
//           </div>
//         </div>

//         <div>
//           <div className="flex flex-row gap-2 p-5 bg-red-500  ">
//             Users

//             <Button >
//               <Link href={"/dashboard/users"}>All Users</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AdminDashboard;
"use client";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { PiHospitalBold } from "react-icons/pi";
import { useRouter } from "next/navigation";

export function AdminDashboard() {
  const router = useRouter();
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          onClick={() => router.push(item.href)}
          key={item.title + item.id}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={`bg-blue-300 p-5 m-2 ${
            i === 3 || i === 6 ? "md:col-span-2" : ""
          } hover:cursor-pointer`}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    id: 1,
    title: "Hospital",
    description: "List of all hospitals in the system.",
    header: <Skeleton />,
    icon: <PiHospitalBold className="h-10 w-10 text-blue-900" />,
    href: "/dashboard/hospitals",
  },
  {
    id: 2,
    title: "Users",
    description: "List of all Users in the system.",
    header: <Skeleton />,
    icon: <PiHospitalBold className="h-10 w-10 text-blue-900" />,
    href: "/dashboard/users",
  },
  {
    id: 3,
    title: "Hospital",
    description: "List of all hospitals in the system.",
    header: <Skeleton />,
    icon: <PiHospitalBold className="h-10 w-10 text-blue-900" />,
    href: "/dashboard/hospitals",
  },
  {
    id: 4,
    title: "Users",
    description: "List of all Users in the system.",
    header: <Skeleton />,
    icon: <PiHospitalBold className="h-10 w-10 text-blue-900" />,
    href: "/dashboard/users",
  },
  {
    id: 4,
    title: "Users",
    description: "List of all Users in the system.",
    header: <Skeleton />,
    icon: <PiHospitalBold className="h-10 w-10 text-blue-900" />,
    href: "/dashboard/users",
  },
  {
    id: 4,
    title: "Users",
    description: "List of all Users in the system.",
    header: <Skeleton />,
    icon: <PiHospitalBold className="h-10 w-10 text-blue-900" />,
    href: "/dashboard/users",
  },
];
