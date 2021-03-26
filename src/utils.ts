export const dateStringToDate = (d: string): Date {
  const dateParts = d.split('/').map((val: string): number => {
    return parseInt(val);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}