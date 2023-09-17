import React from "react";
const { format } = require('date-fns');

import { I_Header } from "./Header.types";

export default function Header({ post, author }: I_Header) {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">{post.title}</h1>

      { post.publicationDate &&
        <div className="mt-2 text-center text-sm text-gray-400">
        By {author} on {format(new Date(post.publicationDate), 'LLL d, yyyy')}
      </div>}
    </>
  );
};