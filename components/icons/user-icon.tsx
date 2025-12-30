import { IconProps } from "@/types/props";

export default function UserIcon({ ...props }: IconProps) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <ellipse
                cx="12"
                cy="17.5"
                rx="7"
                ry="3.5"
                stroke="#28303F"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <circle
                cx="12"
                cy="7"
                r="4"
                stroke="#28303F"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}
