import React from 'react';
import { LogoProps } from './Logo.types';

export default function Logo({ icon, name }: LogoProps) {
  return (
    <div className="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
      {icon}

      {name}
    </div>
  );
}