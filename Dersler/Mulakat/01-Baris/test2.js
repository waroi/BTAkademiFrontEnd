export const toNaturalDateString = (dateString, locale, type) => {
  const date = new Date(dateString);

  switch (type) {
    case "short":
      const options = { dateStyle: "short" };
      return date.toLocaleDateString(locale, options);
    case "long":
      const formattedDateString = date.toLocaleDateString(locale, {
        dateStyle: "long",
      });
      const formattedWeekdayString = date.toLocaleDateString(locale, {
        weekday: "long",
      });
      return `${formattedDateString}, ${formattedWeekdayString}`;
    default:
      return date.toLocaleDateString(locale);
  }
};

export const toTimeString = (dateString, locale) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// ("2022-09-07T12:34:00");

// ("7/9/2022");

// ("7 Eylül 2022 Çarşamba, 12:34");
