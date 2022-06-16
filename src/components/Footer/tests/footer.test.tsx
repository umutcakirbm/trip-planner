import { render, screen } from '@testing-library/react';
import React from 'react';

import Footer from '..';

describe('components - footer', () => {
  it('footer text should be "© 2014-2021 Tiqets Amsterdam"', () => {
    render(<Footer />);
    expect(screen.getByText('© 2014-2021 Tiqets Amsterdam')).toBeInTheDocument();
  });
});
