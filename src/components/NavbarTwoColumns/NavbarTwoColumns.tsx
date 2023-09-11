import React from "react";
import { NavbarTwoColumnsProps } from "./NavbarTwoColumns.types";

export default function NavbarTwoColumns({ children }: NavbarTwoColumnsProps) {
  return (
    <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
      {children}
    </div>
  );
}