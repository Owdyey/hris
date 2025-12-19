import { ReactNode } from "react";

export default function Applayout({ children }: { children: ReactNode }) {
  return (
    <div>
      Hello
      <main>{children}</main>
    </div>
  );
}
