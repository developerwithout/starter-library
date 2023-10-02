import React from "react";
import { I_Navbar } from "./Navbar.types";

export default function Navbar({ children }: I_Navbar) {
  return (
    <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
      {children}
    </div>
  );
}