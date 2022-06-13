import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { DaysLabelMapping } from '../../../../enums/days';
import DatepickerButton, { DatepickerButtonProps } from '../datepicker-button';

describe('components - datepickerButton', () => {
  let selectedDate: string;
  const date = new Date();
  const params: DatepickerButtonProps = {
    originalISOString: date.toISOString(),
    date: date.getDate(),
    day: date.getDay(),
    isLastDayOfTheMonth: false,
    selected: false,
    disabled: false,
    onSelect: (isoString: string) => {
      selectedDate = isoString;
    },
  };

  const setup = (props: DatepickerButtonProps = params) => {
    render(<DatepickerButton {...props} />);
  };

  it('day ISO string should be emitted after clicking', () => {
    setup();
    const buttonEl = screen.getByRole('button');
    fireEvent.click(buttonEl);
    expect(selectedDate).toBe(params.originalISOString);
  });

  it('date should be rendered', () => {
    setup();
    const dateEl = screen.getByText(params.date.toString());
    expect(dateEl).toBeInTheDocument();
  });

  it('day should be rendered', () => {
    setup();
    const dayEl = screen.getByText(DaysLabelMapping[params.day]);
    expect(dayEl).toBeInTheDocument();
  });

  it('last day border should be rendered', () => {
    setup({ ...params, isLastDayOfTheMonth: true });
    const borderEl = screen.getByRole('separator');
    expect(borderEl).toBeInTheDocument();
  });

  it('last day border should not be rendered', () => {
    setup();
    const borderEl = screen.queryByRole('separator');
    expect(borderEl).toBeNull();
  });
});
