import { render } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

import Header from '..';

describe('components - header', () => {
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

  it('header text should be "Plan your trip!"', () => {
    render(<Header />, { container: container as HTMLElement });
    expect(container?.getElementsByTagName('h1')[0].textContent).toBe('Plan your trip!');
  });
});
