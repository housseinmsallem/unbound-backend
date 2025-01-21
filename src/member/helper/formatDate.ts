export function formatDateToMMDDYYYY(date: Date): Date {
  const formattedDate = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );
  return formattedDate;
}
