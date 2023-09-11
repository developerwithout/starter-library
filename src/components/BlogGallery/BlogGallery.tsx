import React from "react";
import { BlogGalleryProps } from "./BlogGallery.types";
import BlogCard from "../BlogCard/BlogCard";

export default function BlogGallery({list}: BlogGalleryProps) {
  return (
    <div className="w-fit items-center mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
      {
        list.map(item => (
          <BlogCard key={item.link} {...item} />
        ))
      }
    </div>
  )
}