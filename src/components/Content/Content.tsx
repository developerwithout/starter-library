import React from "react";
import { I_Content } from "./Content.types";

export default function Content({
  image,
  children
}: I_Content) {
  return (
    <div className="mx-auto mt-5 max-w-prose">
      <div className="aspect-w-3 aspect-h-2">
        {image && <img className="h-full w-full rounded-lg object-cover object-center"
          src={image.src}
          alt={image.alt}
          loading="lazy"
        />}
      </div>

      <div className="prose prose-invert mt-8 prose-img:rounded-lg">
        {children}
      </div>
    </div>
  )
}