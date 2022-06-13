import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

import SelectFilter, { SelectFilterProps } from '..';

describe('components - selectFilter', () => {
  let container: HTMLElement | null = null;
  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterAll(() => {
    unmountComponentAtNode(container as HTMLElement);
    (container as HTMLElement).remove();
    container = null;
  });

  const nonExistValue = '3';
  const params: SelectFilterProps = {
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

  const setup = (props: SelectFilterProps = params) => {
    const utils = render(<SelectFilter {...props} />, { container: container as HTMLElement });
    const labelEl = container?.getElementsByTagName('label')[0] as HTMLLabelElement;
    const selectEl = container?.getElementsByTagName('select')[0] as HTMLSelectElement;
    const placeholderEl = container?.getElementsByTagName('option')[0] as HTMLOptionElement;
    const options = container?.getElementsByTagName('option');
    return { utils, labelEl, selectEl, placeholderEl, options };
  }

  it('label for attr. should be equal with select id', () => {
    const { labelEl, selectEl } = setup();
    expect(labelEl?.getAttribute('for')).toBe(selectEl?.getAttribute('id'));
  });

  it('label should be set', () => {
    const { labelEl } = setup();
    expect(labelEl?.textContent).toBe(params.label);
  });

  it('placeholder should be set on the first option item and be disabled', () => {
    const { placeholderEl } = setup();
    expect(placeholderEl?.textContent).toBe(params.placeholder);
    expect(placeholderEl?.hasAttribute('disabled')).toBe(true);
  });

  it('value should be set if exist', () => {
    const { selectEl } = setup();
    expect(selectEl?.value).toBe(params.value);
  });

  it('value should be set "" if not exist', () => {
    const newParams = { ...params, value: nonExistValue };
    const { selectEl } = setup(newParams);
    expect(selectEl?.value).toBe('');
  });

  it('value should be set after change triggered', () => {
    const { utils, selectEl } = setup();
    fireEvent.change(selectEl, { target: { value: '1' } });
    utils.rerender(<SelectFilter {...params} />);
    const selectedOption: HTMLOptionElement = selectEl.querySelector(
      'option:checked',
    ) as HTMLOptionElement;
    expect(selectedOption.value).toBe('1');
  });

  it('options should be set', () => {
    const { options } = setup();
    expect(options?.length).toBe(params.options.length + 1);
  });
});
