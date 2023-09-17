import React from "react";
import type { I_Menu } from "./Menu.types";

export default function Menu({ children }: I_Menu) {
  return (
    <nav>
      <ul className="flex gap-x-3 font-medium text-gray-200">
        {children}
      </ul>
    </nav>
  )
}