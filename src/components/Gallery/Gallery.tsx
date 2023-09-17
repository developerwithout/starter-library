import React from "react";
import { I_Gallery as I_Gallery } from "./Gallery.types";

export default function Gallery({children}: I_Gallery) {
  return (
    <div className="w-fit items-center mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
      {children}
    </div>
  )
}