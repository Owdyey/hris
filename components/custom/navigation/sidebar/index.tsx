"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "../navLink";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
    const pathname = usePathname();
    const path = "/" + pathname.split("/").filter(Boolean)[0];
    return (
        <div className="w-[280px] bg-gray-400 rounded-4xl p-6">
            <Image
                src={"/appLogo.svg"}
                width={120}
                height={100}
                alt="App Logo"
                className="my-5"
            />
            <div className="flex flex-col gap-[10px]">
                {navLinks.map(({ label, url, icon: Icon }) => (
                    <Link
                        href={url}
                        key={url}
                        className={`p-3 ${
                            path == url
                                ? "bg-[#FFF1EB] border-l-4 border-primary rounded-br-lg rounded-tr-lg"
                                : ""
                        }`}
                    >
                        <p
                            className={`flex align-middle gap-4  text-[16px] ${
                                pathname == url
                                    ? "text-primary-foreground font-bold"
                                    : "font-light"
                            }`}
                        >
                            <Icon active={path == url} />
                            {label}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
