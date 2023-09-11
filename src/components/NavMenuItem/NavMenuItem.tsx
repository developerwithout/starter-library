import React from 'react';
import { NavMenuItemProps } from './NavMenuItem.types';

export default function NavMenuItem({href, target = '_self', children}:NavMenuItemProps) {
  return (
    <li className="hover:text-white">
      <a href={href} target={target}>{children}</a>
    </li>
  )
}