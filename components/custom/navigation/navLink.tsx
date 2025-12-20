import AppIcon from "@/components/icons/app-icon";
import CalendarIcon from "@/components/icons/calendar-icon";
import CandidatesIcon from "@/components/icons/candidates-icon";
import DepartmentIcon from "@/components/icons/department-icon";
import EmployeesIcon from "@/components/icons/employees-icon";
import HolidaysIcon from "@/components/icons/holidays-icon";
import JobsIcon from "@/components/icons/jobs-icon";
import LeavesIcon from "@/components/icons/leaves-icon";
import PayrollIcon from "@/components/icons/payroll-icon";
import SettingsIcon from "@/components/icons/settings-icon";
import { IconProps } from "@/types/props";
import { ComponentType } from "react";

export type NavLinkTypes = {
  url: string;
  icon: ComponentType<IconProps>;
  label: string;
};

export const navLinks: NavLinkTypes[] = [
  { url: "/", icon: AppIcon, label: "Dashboard" },
  { url: "/employees", icon: EmployeesIcon, label: "All Employees" },
  { url: "/departments", icon: DepartmentIcon, label: "All Department" },
  { url: "/attendance", icon: CalendarIcon, label: "Attendance" },
  { url: "/payroll", icon: PayrollIcon, label: "Payroll" },
  { url: "/jobs", icon: JobsIcon, label: "Jobs" },
  { url: "/candidates", icon: CandidatesIcon, label: "Candidates" },
  { url: "/leaves", icon: LeavesIcon, label: "Leaves" },
  { url: "/holidays", icon: HolidaysIcon, label: "Holidays" },
  { url: "/settings", icon: SettingsIcon, label: "Settings" },
];
