// boiler plate for layout

import { Navbar } from "@/components/admin/Navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <Navbar>
        <div className="mx-auto px-5 my-10">{children}</div>
      </Navbar>
  );
}
