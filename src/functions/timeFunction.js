export const fromTo = (t, hour) => {
  if (!hour) "";
  if (hour > 12) {
    return `${hour - 12} ${t("P.M.")}`;
  } else if (hour < 12) {
    return `${hour} ${t("A.M.")}`;
  } else if (hour == 12) {
    return `${hour} ${t("P.M.")}`;
  } else if (hour == 0) {
    return `${hour} ${t("A.M.")}`;
  }
};
