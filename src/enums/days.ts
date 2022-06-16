export enum Days {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

export const DaysLabelMapping: Record<Days, string> = {
  [Days.SUNDAY]: 'SUN',
  [Days.MONDAY]: 'MON',
  [Days.TUESDAY]: 'TUE',
  [Days.WEDNESDAY]: 'WED',
  [Days.THURSDAY]: 'THU',
  [Days.FRIDAY]: 'FRI',
  [Days.SATURDAY]: 'SAT',
};
