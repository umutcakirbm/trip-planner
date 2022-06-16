import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Datepicker, { DatepickerProps } from '..';

describe('components - datepicker', () => {
  const date = '2021-07-30';
  const params: DatepickerProps = {
    id: 'test',
    label: 'Test',
    availableDates: [date],
    selectedDate: date,
    onSelect: (dateString: string) => {
      params.selectedDate = dateString;
    },
  };

  const setup = (props: DatepickerProps = params) => {
    const component = (_props = props) => <Datepicker {..._props} />;
    const utils = render(component());
    return { rerender: (_props: DatepickerProps) => utils.rerender(component(_props)) };
  };

  it('label should be set', () => {
    setup();
    expect(screen.getByText(params.label)).toBeInTheDocument();
  });

  it('selected Date should be set after select triggered', () => {
    const { rerender } = setup();
    fireEvent.click(screen.getAllByRole('button')[1]);
    rerender(params);
    expect(screen.getAllByRole('button')[1]).toHaveClass('buttonWrapper__button_selected');
  });
});
