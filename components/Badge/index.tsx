import type { BadgeProps } from "@pTypes/uiTypes";

export const Badge = ({ label }: BadgeProps) => {
  return (
    <div className="flex w-full cursor-default items-center justify-center rounded bg-turquoise/25 px-2 py-1 ">
      <span className="text-xs font-medium text-turquoise">{label}</span>
    </div>
  );
};
