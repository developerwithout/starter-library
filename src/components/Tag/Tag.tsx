import React from "react";
import { TagProps, TagColors } from './Tag.types'

const colorToClassMap = {
  [TagColors.SLATE]: 'bg-slate-400 text-slate-900',
  [TagColors.GRAY]: 'bg-gray-400 text-gray-900',
  [TagColors.ZINC]: 'bg-zinc-400 text-zinc-900',
  [TagColors.NEUTRAL]: 'bg-neutral-400 text-neutral-900',
  [TagColors.STONE]: 'bg-stone-400 text-stone-900',
  [TagColors.RED]: 'bg-red-400 text-red-900',
  [TagColors.ORANGE]: 'bg-orange-400 text-orange-900',
  [TagColors.AMBER]: 'bg-amber-400 text-amber-900',
  [TagColors.YELLOW]: 'bg-yellow-400 text-yellow-900',
  [TagColors.LIME]: 'bg-lime-400 text-lime-900',
  [TagColors.GREEN]: 'bg-green-400 text-green-900',
  [TagColors.EMERALD]: 'bg-emerald-400 text-emerald-900',
  [TagColors.TEAL]: 'bg-teal-400 text-teal-900',
  [TagColors.CYAN]: 'bg-cyan-400 text-cyan-900',
  [TagColors.SKY]: 'bg-sky-400 text-sky-900',
  [TagColors.BLUE]: 'bg-blue-400 text-blue-900',
  [TagColors.INDIGO]: 'bg-indigo-400 text-indigo-900',
  [TagColors.VIOLET]: 'bg-violet-400 text-violet-900',
  [TagColors.PURPLE]: 'bg-purple-400 text-purple-900',
  [TagColors.FUCHSIA]: 'bg-fuchsia-400 text-fuchsia-900',
  [TagColors.PINK]: 'bg-pink-400 text-pink-900',
  [TagColors.ROSE]: 'bg-rose-400 text-rose-900',
  [TagColors.GRAINBROWN]: 'bg-grain-brown-400 text-grain-brown-900',
  [TagColors.JUMBO]: 'bg-jumbo-400 text-jumbo-900',
  [TagColors.ASTRONAUT]: 'bg-astronaut-400 text-astronaut-900',
  [TagColors.ELEPHANT]: 'bg-elephant-400 text-elephant-900',
  [TagColors.OUTERSPACE]: 'bg-outer-space-400 text-outer-space-900',
  [TagColors.CHATEAUGREEN]: 'bg-chateau-green-400 text-chateau-green-900',
  [TagColors.MARIGOLD]: 'bg-marigold-400 text-marigold-900',
  [TagColors.POMEGRANATE]: 'bg-pomegranate-400 text-pomegranate-900',
  [TagColors.PRIMARY]: 'bg-primary text-primary',
  [TagColors.INFO]: 'bg-info-400 text-info-900',
  [TagColors.SUCCESS]: 'bg-success-400 text-success-900',
  [TagColors.WARNING]: 'bg-warning-400 text-warning-900',
  [TagColors.DANGER]: 'bg-danger-400 text-danger-900',
}

export default function Tag({ color, children }: TagProps) {
  return (
    <div className={`rounded-full w-fit px-3 py-2 text-xs font-semibold ${colorToClassMap[color]}`}>
      {children}
    </div>
  );
};