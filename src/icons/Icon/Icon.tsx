import React from "react";
import { IconProps } from "./Icon.types";

export default function Icon({className, svgRef, transform, children, ...props}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox='0 0 128 128'
      width="128"
      className={className}
      ref={svgRef}
      transform={transform}
      {...props}
    >
      { children }
    </svg>
  )
}