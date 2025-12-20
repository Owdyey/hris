import { IconProps } from "@/types/props";
import { SVGProps } from "react";

export default function CandidatesIcon({ active, ...props }: IconProps) {
  const strokeColor = active ? "#FF4000" : "#16151C";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-user-round-icon lucide-user-round"
      {...props}
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
}
