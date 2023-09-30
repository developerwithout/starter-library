import React from 'react';
import type { I_Card } from './Card.types'

export default function Card({ link, image, title, publishDate, description }: I_Card) {
  return (
    <a href={link} className="hover:translate-y-1">
      <div className="w-fit overflow-hidden rounded-md bg-slate-800">
        {
          image && <div className="aspect-w-3 aspect-h-2">

            <img
              className='h-full w-full object-cover object-center'
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        }

        <div className="px-3 pt-4 pg-6 text-center text-gray-400">
          <h2 className="text-xl font-semibold">
            {title}
          </h2>


          <div className="mt-1 text-xs text-gray-400">
            {
              publishDate ?
                new Date(publishDate)
                  .toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) :
                'Not Published'
            }
          </div>

          <div className="mt-2 text-sm">
            {description}
          </div>
        </div>
      </div>
    </a>
  );
}
