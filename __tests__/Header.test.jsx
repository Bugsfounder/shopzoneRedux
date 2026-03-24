import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from './utils/test-utils';
import Header from '@/components/Header';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Header Component', () => {
  it('renders without crashing and displays correct text', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('ShopZone')).toBeInTheDocument();
  });

  it('displays correct cart quantity from Redux store', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        cart: { totalQuantity: 3 }
      }
    });
    
    // The cart notification should show 3
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('toggles theme on button click', async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(<Header />, {
      preloadedState: {
        theme: { mode: 'light' }
      }
    });
    
    const themeButton = screen.getByRole('button', { name: /toggle theme/i });
    expect(themeButton).toBeInTheDocument();
    
    await user.click(themeButton);
    
    // The action should be dispatched, toggling theme mode to dark in the store
    expect(store.getState().theme.mode).toBe('dark');
  });
});
