import type { BadgeProps } from "@pTypes/uiTypes";

export const Badge = ({ label }: BadgeProps) => {
  return (
    <span className="inline-block rounded  bg-turquoise/25 px-2 py-2 text-xs font-medium text-turquoise cursor-default">
      {label}
    </span>
  );
};
