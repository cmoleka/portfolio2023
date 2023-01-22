import type { BadgeProps } from "@pTypes/uiTypes";

export const Badge = ({ label }: BadgeProps) => {
  return (
    <span className="inline-block rounded border-2 border-dashed border-turquoise bg-transparent px-4 py-2 text-xs font-medium text-white">
      {label}
    </span>
  );
};
