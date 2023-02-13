import dayjs from "dayjs";

export const DateFormat = (date: string) => {
  return dayjs(date).format("MMM D, YYYY");
};
