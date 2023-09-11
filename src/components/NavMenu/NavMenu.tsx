import React from "react";
import type { NavMenuProps } from "./NavMenu.types";

export default function NavMenu({ children }: NavMenuProps) {
  return (
    <nav>
      <ul className="flex gap-x-3 font-medium text-gray-200">
        {children}
      </ul>
    </nav>
  )
}