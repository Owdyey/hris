import { IconProps } from "@/types/props";

export default function LogoutIcon({ ...props }: IconProps) {
    return (
        <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M13.25 8.25195L8.25 8.25195M0.75 12.6406V4.30723M10.75 12.6406C10.75 13.561 10.0038 14.3072 9.08333 14.3072H5.75M10.75 4.30723C10.75 3.38675 10.0038 2.64056 9.08333 2.64056H5.75M1.49217 14.802L3.15883 15.9131C4.26642 16.6515 5.75 15.8575 5.75 14.5264V2.42142C5.75 1.09026 4.26643 0.296277 3.15883 1.03467L1.49217 2.14578C1.0285 2.45489 0.75 2.97528 0.75 3.53253V13.4153C0.75 13.9725 1.0285 14.4929 1.49217 14.802Z"
                stroke="#F45B69"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}
