export function formatDate(date: Date, type: "short" | "long") {
  const shortDateFormat = new Intl.DateTimeFormat("en-CA")
  const longDateFormat = new Intl.DateTimeFormat("en-CA", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  switch (type) {
    case "short":
      return shortDateFormat.format(date)
      break;
    case "long":
      return longDateFormat.format(date)
      break;
    default:
      return date.getTime()
      break;
  }
  
}