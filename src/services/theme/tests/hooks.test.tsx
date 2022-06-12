import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import { store } from '../../../redux/store';
import { useThemeListener } from '../hooks';

describe('theme - hooks', () => {
  describe('useThemeListener', () => {
    type EventListener = { name: string; fn: () => void };
    const listeners: EventListener[] = [];
    const watchMediaObj = {
      matches: false,
      addEventListener: (name: string, fn: () => void) => listeners.push({ name, fn }),
      removeEventListener: (name: string, fn: () => void) =>
        listeners.splice(
          listeners.findIndex((l) => l.name === name && l.fn === fn),
          1,
        ),
    } as unknown as MediaQueryList;
    window.matchMedia = () => watchMediaObj;

    const changeMatches = function () {
      Object.assign(watchMediaObj, { matches: true });
      listeners.forEach(l => l.fn());
    };
    
    const TestComponent: React.FC = () => {
      useThemeListener();
      return <></>;
    }

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

    it('useThemeListener hook runs correctly', async () => {
      act(() => {
        render(
          <Provider store={store}>
            <TestComponent />
          </Provider>,
          { container: container as HTMLElement },
        );
      });
      await act(() =>
        waitFor(() => {
          expect(document.documentElement.className).toBe('theme theme--default');
        }),
      );
      changeMatches();
      await act(() =>
        waitFor(() => {
          expect(document.documentElement.className).toBe('theme theme--dark');
        }),
      );
    });
  });
});
