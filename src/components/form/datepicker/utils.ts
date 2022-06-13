import { DatepickerButtonProps } from './datepicker-button';

export const getDateRangeArray = (
  from: string,
  dayCount: number,
  availableDates: string[],
  selectedDate?: string,
): Array<DatepickerButtonProps> => {
  const currentDate = new Date(from);
  const to = new Date(from);
  to.setDate(to.getDate() + dayCount);
  const dateRange: Array<DatepickerButtonProps> = [];
  while (to > currentDate) {
    const currentISODateString = currentDate.toISOString().split('T')[0];
    const selected = selectedDate === currentISODateString;
    const disabled = availableDates.indexOf(currentISODateString) === -1;
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    const isLastDayOfTheMonth = nextDay.getDate() === 1;
    dateRange.push({
      originalISOString: currentISODateString,
      date: currentDate.getDate(),
      day: currentDate.getDay(),
      isLastDayOfTheMonth,
      selected,
      disabled,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateRange;
};
