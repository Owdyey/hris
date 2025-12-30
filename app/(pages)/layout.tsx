import { Sidebar, TopBar } from "@/components/custom/navigation";
import { ReactNode } from "react";

export default function Applayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex gap-7.5 p-5 w-full min-w-300">
            <Sidebar />
            <div className="flex flex-col gap-7.5 w-full">
                <TopBar />
                <main>{children}</main>
            </div>
        </div>
    );
}
