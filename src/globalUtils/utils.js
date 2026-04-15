export const enrollDateFormat = (date) => {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (isNaN(parsedDate)) return "Invalid date";

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};