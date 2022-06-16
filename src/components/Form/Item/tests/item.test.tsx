import { render, screen } from '@testing-library/react';
import React from 'react';

import FormItem, { FormItemProps } from '..';

describe('components - formItem', () => {

  const params: FormItemProps = {
    id: 'country-filter',
    label: 'Country',
    children: (<div>childTest</div>),
  };

  const setup = (props: FormItemProps = params) => {
    render(<FormItem {...props} />);
  }

  it('label should be set', () => {
    setup();
    expect(screen.getByText(params.label)).toBeInTheDocument();
  });

  it('id should be set', () => {
    setup();
    expect(screen.getByText(params.label)).toHaveAttribute('for', params.id);
  });

  it('children should be rendered', () => {
    setup();
    const childEl = screen.getByText(/childTest/i);
    expect(childEl).toBeInTheDocument();
  });
});
