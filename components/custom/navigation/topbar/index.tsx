"use client";

import { usePathname } from "next/navigation";
import { topBarHeaders } from "../topBarHeader";
import { Button } from "@/components/ui/button";
import SearchBar from "./searchbar";
import NotificationIcon from "@/components/icons/notification-icon";
import AccountDropdown from "./account-dropdown";

export default function Topbar() {
    const pathname: string = usePathname();

    return (
        <div className="h-20.5 w-full flex items-center justify-between ">
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
                <Button
                    variant="ghost"
                    className="bg-gray-10 cursor-pointer"
                    size="icon-lg"
                >
                    <NotificationIcon />
                </Button>
                <AccountDropdown />
            </div>
        </div>
    );
}
