import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import FormSelect, { FormSelectProps } from '..';

describe('components - formSelect', () => {
  const nonExistValue = '3';
  const params: FormSelectProps = {
    id: 'country-filter',
    label: 'Country',
    placeholder: 'Choose the country',
    value: '2',
    options: [
      { label: 'test', value: '1' },
      { label: 'test2', value: '2' },
    ],
    onChange: (val) => {
      params.value = val;
    },
  };

  const setup = (props: FormSelectProps = params) => {
    const component = (_props = props) => <FormSelect {..._props} />;
    const utils = render(component());
    return { rerender: (_props: FormSelectProps) => utils.rerender(component(_props)) };
  };

  it('label for attr. should be equal with select id', () => {
    setup();
    expect(screen.getByLabelText(params.label)).toBeInTheDocument();
  });

  it('label should be set', () => {
    setup();
    expect(screen.getByText(params.label)).toBeInTheDocument();
  });

  it('placeholder should be set on the first option item and be disabled', () => {
    setup();
    const placeholderEl = screen.getByText(params.placeholder);
    expect(placeholderEl).toBeInTheDocument();
    expect(placeholderEl).toHaveAttribute('disabled');
  });

  it('value should be set if exist', () => {
    setup();
    expect(screen.getByRole('combobox')).toHaveValue(params.value);
  });

  it('value should be set "" if not exist', () => {
    const newParams = { ...params, value: nonExistValue };
    setup(newParams);
    expect(screen.getByRole('combobox')).toHaveValue('');
  });

  it('value should be set after change triggered', () => {
    const { rerender } = setup();
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
    rerender(params);
    expect(screen.getByRole('combobox')).toHaveValue('1');
  });

  it('options should be set as Object Array', () => {
    setup();
    expect(screen.getAllByRole('option')).toHaveLength(params.options.length + 1);
  });

  it('options should be set as String Array', () => {
    setup({ ...params, options: ['Test', 'Test2'] });
    expect(screen.getAllByRole('option')).toHaveLength(params.options.length + 1);
  });
});
