// boiler plate for layout

import SignOut from "@/components/shared/SignOut";

export default function Patient({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignOut />
      {children}
    </>
  );
}
