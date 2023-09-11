import React from "react";
import { ProjectProps } from "./Project.types";

export default function Project({ image, title, description, link, categories }: ProjectProps) {
  return (
    <a
      href={link}
      className="hover:text-cyan-400">
      <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
        {
          image && <div className="shrink-0">
            <a href={link}>
              <img
                className="h-36 w-36 hover:translate-y-1"
                src={image.src}
                alt={image.alt}
                loading='lazy'
              />
            </a>
          </div>
        }

        <div>
          <div className="flex flex-col items-center gap-y-2 md:flex-row">
            <div className="text-xl font-semibold">{title}</div>

            {
              categories && <div className="ml-3 flex flex-wrap gap-2">
                {categories}
              </div>
            }
          </div>

          {
            description && <p className="mt-3 text-gray-400">
              {description}
            </p>
          }
        </div>
      </div >
    </a >
  )
}