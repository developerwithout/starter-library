import React from "react";
import { I_Navbar } from "./NavbarTwoColumns.types";

export default function NavbarTwoColumns({ children }: I_Navbar) {
  return (
    <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
      {children}
    </div>
  );
}