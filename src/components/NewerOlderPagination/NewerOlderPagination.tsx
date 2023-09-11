import React from "react";
import { NewerOlderPaginationProps } from "./NewerOlderPagination.types";

export default function NewerOlderPagination({ next, previous }: NewerOlderPaginationProps) {
  return (
    <div className="flex justify-center gap-8">
      {previous && <a href={previous}>← Newer Posts</a>}
      {next && <a href={next}>Older Posts →</a>}
    </div>
  );
};