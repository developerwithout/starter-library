import React from 'react';
import type { GradientTextProps } from "./GradientText.types"

export default function GradientText({ children }: GradientTextProps) {
  return (
    <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
      {children}
    </span>
  )
}