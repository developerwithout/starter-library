import React from "react";
import { SectionProps } from "./Section.types";

export default function Section(props: SectionProps) {
  return (
    <section className="mx-auto max-w-screen-lg px-3 py-6">
      {props.title && (
        <div className="mb-6 text-2xl font-bold">{props.title}</div>
      )}

      {props.children}
    </section>
  );
};