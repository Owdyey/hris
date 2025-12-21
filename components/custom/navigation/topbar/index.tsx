"use client";

import { usePathname } from "next/navigation";
import { topBarHeaders } from "../topBarHeader";
import SearchBar from "./searchbar";
import NotificationIcon from "@/components/icons/notification-icon";
import { Button } from "@/components/ui/button";

export default function Topbar() {
    const pathname: string = usePathname();

    return (
        <div className="h-[82px] w-[1040px] border-2 flex items-center justify-between ">
            {topBarHeaders.map(({ url, title, subtitle }) =>
                pathname === url ? (
                    <div key={url} className="flex flex-col gap-2">
                        <p className="text-foreground font-bold text-xl">
                            {title}
                        </p>
                        <p className="text-gray-500">{subtitle}</p>
                    </div>
                ) : (
                    ""
                )
            )}

            <div className="flex gap-[10px] items-center">
                <SearchBar />
                <Button className="bg-gray-10 h-[40px] w-[40px] hover:bg-gray-10">
                    <NotificationIcon />
                </Button>
            </div>
        </div>
    );
}
