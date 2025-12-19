import AppIcon from "@/components/icons/app-icon";
import { navLinks } from "../navLink";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[280px] bg-gray-400 rounded-4xl p-6">
      <div className="flex flex-col gap-10">
        {navLinks.map(({ label, url, icon }) => (
          <Link href={url} key={url}>
            <p className="flex align-middle gap-2">
              {icon}
              {label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
