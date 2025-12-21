"use client";

import { usePathname } from "next/navigation";
import { topBarHeaders } from "../topBarHeader";
import SearchBar from "./searchbar";
import NotificationIcon from "@/components/icons/notification-icon";
import { Button } from "@/components/ui/button";
import AccountPopover from "./account-popover";

export default function Topbar() {
    const pathname: string = usePathname();

    return (
        <div className="h-20.5 w-260 flex items-center justify-between ">
            {topBarHeaders.map(({ url, title, subtitle }) =>
                pathname === url ? (
                    <div key={url} className="flex flex-col gap-2">
                        <p className="text-foreground font-bold text-lg">
                            {title}
                        </p>
                        <p className="text-gray-500 text-[12px]">{subtitle}</p>
                    </div>
                ) : (
                    ""
                )
            )}

            <div className="flex gap-2.5 items-center">
                <SearchBar />
                <Button className="bg-gray-10 hover:bg-gray-10" size="icon-lg">
                    <NotificationIcon />
                </Button>
                <AccountPopover />
            </div>
        </div>
    );
}
