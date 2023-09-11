import React from "react";
import Icon from "../Icon/Icon";
import { IconProps } from "../Icon/Icon.types";

export default function BrandIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <g clip-path="url(#clip0_7_66)">
        <rect y="128" width="181.019" height="181.019" rx="30" transform="rotate(-45 0 128)" fill="#265C73" />
        <path d="M164.093 164.093L200.297 127.889L164.093 91.6854M91.6854 91.6854L55.4816 127.889L91.6854 164.093M142.371 62.7223L113.408 193.056" stroke="#E0C8AB" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_7_66">
          <rect width="256" height="256" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  )
}