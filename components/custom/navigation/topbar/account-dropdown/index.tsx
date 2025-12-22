import AccountArrowUpIcon from "@/components/icons/account-dropdown-icon";
import LogoutIcon from "@/components/icons/logout-icon";
import UserIcon from "@/components/icons/user-icon";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";

export default function AccountDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="h-10 p-0 outline-none focus:ring-0 focus:ring-offset-0">
                <div className="bg-white border-2 border-gray-10 rounded-md h-10 flex items-center pl-1 pr-1 gap-2">
                    <div className="h-8 w-8 border-2 rounded-sm"></div>
                    <div className="flex flex-col items-start justify-center gap-0">
                        <p className="text-foreground text-[10px] font-bold">
                            John Doe
                        </p>
                        <p className="text-gray-500 text-[8px]">HR Manager</p>
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
    );
}
