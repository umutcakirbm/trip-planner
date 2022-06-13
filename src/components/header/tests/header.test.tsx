import { render, screen } from '@testing-library/react';
import React from 'react';

import Header from '..';

describe('components - header', () => {

  it('header text should be "Plan your trip!"', () => {
    render(<Header />);
    expect(screen.getByText('Plan your trip!')).toBeInTheDocument();
  });
});
