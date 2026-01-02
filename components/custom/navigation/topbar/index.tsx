"use client";

import { useParams, usePathname } from "next/navigation";
import { getBreadCrumbsLinks, getTopBarHeaders } from "../topBarHeader";
import { Button } from "@/components/ui/button";
import SearchBar from "../../searchbar";
import NotificationIcon from "@/components/icons/notification-icon";
import AccountArrowUpIcon from "@/components/icons/account-dropdown-icon";
import UserIcon from "@/components/icons/user-icon";
import LogoutIcon from "@/components/icons/logout-icon";
import { Fragment } from "react/jsx-runtime";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Topbar() {
    const pathname: string = usePathname();
    const paths =
        pathname === "/" ? ["/"] : pathname.split("/").filter(Boolean);
    const params = useParams<{
        employeeName?: string;
        departmentName?: string;
    }>();

    const data = {
        topBarheaders: getTopBarHeaders(
            params.employeeName,
            params.departmentName
        ),
        breadCrumbLinks: getBreadCrumbsLinks(
            params.employeeName,
            params.departmentName
        ),
    };

    return (
        <div className="h-20.5 w-full flex items-center justify-between ">
            <div key={pathname} className="flex flex-col gap-2">
                <p className="text-foreground font-bold text-lg">
                    {data.topBarheaders[pathname]}
                </p>
                <Breadcrumb>
                    <BreadcrumbList>
                        {paths.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink
                                            href={
                                                data.breadCrumbLinks[item].link
                                            }
                                        >
                                            {data.breadCrumbLinks[item].title}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {index + 1 !== paths.length ? (
                                        <BreadcrumbSeparator />
                                    ) : (
                                        ""
                                    )}
                                </Fragment>
                            );
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
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
                <DropdownMenu>
                    <DropdownMenuTrigger className="h-10 p-0 outline-none focus:ring-0 focus:ring-offset-0">
                        <div className="bg-white border-2 border-gray-10 rounded-md h-10 flex items-center pl-1 pr-1 gap-2">
                            <div className="h-8 w-8 border-2 rounded-sm"></div>
                            <div className="flex flex-col items-start justify-center gap-0">
                                <p className="text-foreground text-[10px] font-bold">
                                    John Doe
                                </p>
                                <p className="text-gray-500 text-[8px]">
                                    HR Manager
                                </p>
                            </div>
                            <AccountArrowUpIcon />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="backdrop-blur-lg">
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <UserIcon />
                                <p>My Profile</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LogoutIcon />
                                <p className="text-destructive">Logout</p>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
