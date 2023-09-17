import React from 'react';
import { I_MenuItem } from './MenuItem.types';

export default function MenuItem({href, target = '_self', children}:I_MenuItem) {
  return (
    <li className="hover:text-white">
      <a href={href} target={target}>{children}</a>
    </li>
  )
}