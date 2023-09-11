import React from "react";
import { PaginationHeaderProps } from "./PaginationHeader.types";

export default function PaginationHeader({title, description}: PaginationHeaderProps) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">{title}</h1>

      <div className="mt-3 text-gray-200">{description}</div>
    </div>
  )
};