import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from './utils/test-utils';
import Sidebar from '@/components/Sidebar';

describe('Sidebar Component', () => {
  it('renders without crashing and displays Categories text', () => {
    renderWithProviders(<Sidebar />, {
      preloadedState: {
        filter: { category: 'All', priceRange: 1000 }
      }
    });
    
    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByText('Categories')).toBeInTheDocument();
  });

  it('updates category filter when a category is clicked', async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(<Sidebar />, {
      preloadedState: {
        filter: { category: 'All', priceRange: 1000 }
      }
    });
    
    const electronicsButton = screen.getByRole('button', { name: 'Electronics' });
    await user.click(electronicsButton);
    
    // Check if the store updated the category
    expect(store.getState().filter.category).toBe('Electronics');
  });

  it('updates price range when slider is changed', async () => {
    const { store } = renderWithProviders(<Sidebar />, {
      preloadedState: {
        filter: { category: 'All', priceRange: 1000 }
      }
    });
    
    const priceSlider = screen.getByRole('slider');
    
    // Simulate changing the range input value
    import('@testing-library/react').then(({ fireEvent }) => {
      fireEvent.change(priceSlider, { target: { value: '500' } });
      expect(store.getState().filter.priceRange).toBe(500);
    });
  });
});
