import type { HTMLAttributes, Ref } from "react";

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  svgRef?: Ref<SVGSVGElement>;
  transform?: string;
}