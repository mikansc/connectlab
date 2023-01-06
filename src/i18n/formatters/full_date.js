export const formatDate = (date, lng) => {
  return Intl.DateTimeFormat(lng, { dateStyle: "full" }).format(date);
};
