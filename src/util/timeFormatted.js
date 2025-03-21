export const hanldeHourlly = (date) => {
  const dateFormat = new Date(date);
  let hours = dateFormat.getHours();
  const minutes = dateFormat.getMinutes().toString().padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${amPm}`;
};
