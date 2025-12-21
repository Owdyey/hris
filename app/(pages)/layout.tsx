import { Sidebar, TopBar } from "@/components/custom/navigation";
import { ReactNode } from "react";

export default function Applayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-[30px] p-5">
      <Sidebar />
      <div className="flex flex-col gap-[30px]">
        <TopBar />
        <main>{children}</main>
      </div>
    </div>
  );
}
