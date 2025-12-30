"use client";

import { useParams, usePathname } from "next/navigation";
import { getBreadCrumbsLinks, getTopBarHeaders } from "../topBarHeader";
import { Button } from "@/components/ui/button";
import SearchBar from "./searchbar";
import NotificationIcon from "@/components/icons/notification-icon";
import AccountDropdown from "./account-dropdown";
import BreadCrumbNav from "./breadcrumb-nav";
import TopBarTitle from "./topBarTitle";

export default function Topbar() {
    const pathname: string = usePathname();
    const params = useParams<{
        employeeName?: string;
        departmentName?: string;
    }>();

    return (
        <div className="h-20.5 w-full flex items-center justify-between ">
            <div key={pathname} className="flex flex-col gap-2">
                <TopBarTitle
                    data={getTopBarHeaders(
                        params.employeeName,
                        params.departmentName
                    )}
                    url={pathname}
                />
                <BreadCrumbNav
                    data={getBreadCrumbsLinks(
                        params.employeeName,
                        params.departmentName
                    )}
                    url={pathname}
                />
            </div>

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
