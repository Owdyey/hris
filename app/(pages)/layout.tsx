import { Sidebar } from "@/components/custom/navigation";
import { ReactNode } from "react";

export default function Applayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-[30px] p-5">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
