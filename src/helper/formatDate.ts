export function formatDateToMMDDYYYY(date: Date): Date {
  const formattedDate = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );
  return formattedDate;
}
export function parseDateFromDDMMYYYY(dateString: string): Date {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}
