import React from "react";
import { BlogGalleryProps } from "./BlogGallery.types";

export default function BlogGallery({children}: BlogGalleryProps) {
  return (
    <div className="w-fit items-center mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
      {children}
    </div>
  )
}